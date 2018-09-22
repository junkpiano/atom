# Download and startup of ensime server
fs = require 'fs'
path = require 'path'
_ = require 'lodash'

Promise = require 'bluebird'
ensimeClient = require ('ensime-client')

{packageDir, withSbt, mkClasspathFileName, mkAssemblyJarFileName} = require('./utils')

console.log(['ensimeClient', ensimeClient])
{updateEnsimeServer} = ensimeClient.ensimeServerUpdate
{parseDotEnsime} = ensimeClient.dotEnsimeUtils
{startServerFromFile, startServerFromAssemblyJar, clientStarterFromServerStarter} = ensimeClient

updateEnsimeServerWithCoursier = require './ensime-server-update-coursier'
log = require('loglevel').getLogger('ensime.startup')

###
## Pseudo:
This code is pretty complex with lots of continuation passing.
Here is some kind of pseudo for easier understanding:

startClient(dotEnsime) ->
  if(serverRunning(dotEnsime))
    doStartClient(dotEnsime)
  else
    startServer(dotEnsime, () ->
      doStartClient(dotEnsime)
    )

startServer(dotEnsime, whenStarted) ->
  if(classpathOk(dotEnsime))
    doStartServer(dotEnsime, whenStarted)
  else
    updateServer(dotEnsime, () ->
      doStartServer(dotEnsime, whenStarted)
    )

###



# Check that we have a classpath that is newer than atom
# ensime package.json (updated on release), otherwise delete it
classpathFileOk = (cpF) ->
  if not fs.existsSync(cpF)
    false
  else
    cpFStats = fs.statSync(cpF)
    fine = cpFStats.isFile && cpFStats.ctime > fs.statSync(path.join(packageDir(), 'package.json')).mtime
    if not fine
      fs.unlinkSync(cpF)
    fine


# Start ensime server. If classpath file is out of date, make an update first
# (project: DotEnsime): Promise<ChildProcess>
startEnsimeServer = (parsedDotEnsime) ->
  if not fs.existsSync(parsedDotEnsime.cacheDir)
    fs.mkdirSync(parsedDotEnsime.cacheDir)

  ensimeServerVersion = atom.config.get('Ensime.ensimeServerVersion')
  log.debug(['ensime server version', ensimeServerVersion])

  ensimeServerFlags = atom.config.get('Ensime.ensimeServerFlags')
  assemblyJar = mkAssemblyJarFileName(parsedDotEnsime.scalaEdition, ensimeServerVersion)
  
  if(fs.existsSync(assemblyJar))
    Promise.resolve(startServerFromAssemblyJar(assemblyJar, parsedDotEnsime, ensimeServerVersion, ensimeServerFlags))
  else
    cpF = mkClasspathFileName(parsedDotEnsime.scalaVersion, ensimeServerVersion)
    startFromCPFile = -> startServerFromFile(cpF, parsedDotEnsime, ensimeServerVersion, ensimeServerFlags)
    if(not classpathFileOk(cpF))
      atom.notifications.addInfo("Updating server classpath")
      updateEnsimeServerWithCoursier(parsedDotEnsime, ensimeServerVersion, cpF).then(startFromCPFile)
    else
      startFromCPFile()

updateEnsimeServer = (parsedDotEnsime, callback) ->
  ensimeServerVersion = atom.config.get('Ensime.ensimeServerVersion')
  cpF = mkClasspathFileName(parsedDotEnsime.scalaVersion, ensimeServerVersion)
  log.debug(['ensime server version', ensimeServerVersion])
  updateEnsimeServerWithCoursier(parsedDotEnsime, ensimeServerVersion, cpF).then(callback)

module.exports = {
  startClient: clientStarterFromServerStarter(startEnsimeServer) #
  updateEnsimeServer: updateEnsimeServer
}
