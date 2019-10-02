# 25 Careers Front End

[![Continuous Integration](https://github.com/25friday/Careers/workflows/Continuous%20Integration/badge.svg)](https://github.com/25friday/Careers/actions)

# Project setup

Optional:

* Setup Debugger in VS code: https://vuejs.org/v2/cookbook/debugging-in-vscode.html
* Vue tolling for VS code (extension): https://vuejs.github.io/vetur/

# Local Development Setup

Checkout the source, then:

    $ npm install
    $ npm run start

This will change source code:

    $ npm run lint      # run the TS lint and update the source code to fix issues

Other common commands:

    $ npm run serve     # build and run the solution localhost
    $ npm run build     # just build the project into a deployable artifact (dist/)
    $ npm run test      # run the unit tests
    $ npm run clean     # delete all local build artifacts (including node_modules/)

## Manage dependencies

Common dependency management commands:

    $ npm outdated            # list all packages that have newer versions
    $ npm update --save       # update the package.json to the latest version for all packages
    $ npm update --save foo   # update the package.json to the latest version, only for package "foo"
    $
    $ npm audit               # find known security vulnerabilities on the current dependency tree
