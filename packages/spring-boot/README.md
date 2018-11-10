# Atom package for Spring Boot projects

[![macOS Build Status](https://travis-ci.org/spring-projects/atom-spring-boot.svg?branch=master)](https://travis-ci.org/spring-projects/atom-spring-boot) [![Windows Build Status](https://ci.appveyor.com/api/projects/status/1jvknxt9jhykgrxo?svg=true)](https://ci.appveyor.com/project/spring-projects/atom-spring-boot/branch/master) [![Dependency Status](https://david-dm.org/spring-projects/atom-spring-boot.svg)](https://david-dm.org/spring-projects/atom-spring-boot)

Atom package and Language Server providing support for working with Spring Boot apps.

# Java Support

## Usage:

The extension will automatically activate when you edit files with the following
name patterns:

 - `*.java` => activates support for Java files
 
If you find an issue please raise it here: https://github.com/spring-projects/sts4/issues

## Functionality

### Navigating the source code - Go to symbol in file
Easy navigation to Spring-specific elements of your source code. Open `.java` file then open Atom's `Outline View` - View -> Toggle Outline View

![Go to Symbol in file][screenshot-navigation]

### Live application information hovers
Show information from running Spring Boot apps on your machine in the source code. This allows you to run the Spring Boot app locally on your machine and visualizes information from those running apps in your source code.

#### Visualization
Once the tooling detects a running Spring Boot app on your local machine, it automatically shows hints in the source code where data from the running app can be inspected. Then hovering over that area (with the mouse pointer), the data from the running app shows up.

If there are multiple instances of the app running on your machine, the live data from all those instances will show up in the hover information.

![live data from running apps as hover on source code][screenshot-live-hovers]

#### Examples
* `@Profile`: shows information about the active profiles on the running apps
* `@Component`, `@Bean`, `@Autowired`: shows detailed information about the beans and their wiring from the live app
* `@ContidionalOn...`: shows information about the conditions and their evaluation at runtime
* `RequestMapping`: show information about the request mapping for running apps

#### Configuration
You can enable/disable this feature via workspace preferences by adding the following:
```
  "boot-java":
    "boot-hints":
      on: false

```

### Smart code completions
Additional code completions for Spring-specific annotations

![Smart code completion for boot properties][screenshot-code-completion]

#### Examples
* `@Value`: code completion for Spring Boot property keys
* `@Scope`: code completion for standard scope names

# Properties Support

Atom package and Language Server providing support for working with Spring Boot 
`application.properties` and `application.yml` files.

## Usage:

The package will automatically activate when you edit files with the following
name patterns:

 - `application.properties` => activates support for Spring Boot properties in `.properties`format.
 - `application.yml` =>  activates support for Spring Boot properties in `.yml` format.

For all other files select grammar to be `Spring-Boot-Properties` for `properties` file format or `Spring-Boot-Properties-YAML` for 'YAML' file format

## Functionality

This package analyzes your project's classpath and parses and indexes any [Spring Boot
Properties Metadata](https://docs.spring.io/spring-boot/docs/current/reference/html/configuration-metadata.html) it finds. Both Maven and Gradle projects are supported.

The data in the index is used to provide validation, code completions and information
hovers while editing Spring Boot Properties in either `.properties` or `.yml` format.

### Validation

Property keys as well as property values are validated. Property keys are validated for being known properties and values are checked for being of expected type as well being a valid value

![application-yaml-validation][yaml-validation]
![application-properties-validation][properties-validation]

### Code Completions

Both YAML and Properties formats have support for Content Assist on property keys and values helping to write valid Spring Boot configuration files right from the start.

![application-yaml-completions][yaml-completion]

![application-properties-completions][properties-completion]

### Information Hovers

Hovering over property keys provide valuable documentation about the purpose of the property and expected type for its value in a small popup window.

![application-yaml-hovers][yaml-hovers]

# Issues and Feature Requests

Please report bugs, issues and feature requests on the [Github STS4 issue tracker](https://github.com/spring-projects/sts4/issues). 


# Releases:

Released versions of this package can be installed directly from the Atom package installer.

There are also development snapshots available with the latest fixes and improvements from release git repository: https://github.com/spring-projects/atom-spring-boot 
1. Clone the release repository for Atom package if not already cloned and navigate to `atom-spring-boot` folder
2. Run `git clean -fxd` - necessary to delete out of date LS JAR file and dependency packages
3. Run `git pull` - get the latest changes
3. Run `npm install` - Install latest dependecnies and download proper LS JAR
4. Run `apm link .` - Link the package to Atom
5. Either start Atom or Reload Window in Atom 

[screenshot-live-hovers]: https://raw.githubusercontent.com/spring-projects/sts4/4167094ab94a05657fe4b495770bf93ce3a1585f/atom-extensions/atom-spring-boot/readme-imgs/screenshot-live-hovers.png
[screenshot-code-completion]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/screenshot-code-completion.png
[screenshot-navigation]: https://raw.githubusercontent.com/spring-projects/sts4/4167094ab94a05657fe4b495770bf93ce3a1585f/atom-extensions/atom-spring-boot/readme-imgs/screenshot-navigation-in-file.png

[yaml-completion]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/yaml-completion.png
[properties-completion]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/properties-completion.png
[yaml-validation]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/yaml-validation.png
[properties-validation]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/properties-validation.png
[yaml-hovers]: https://raw.githubusercontent.com/spring-projects/sts4/874c74f3bae0dd08250aeceb46ae5cc2ca720096/atom-extensions/atom-spring-boot/readme-imgs/yaml-hovers.png
