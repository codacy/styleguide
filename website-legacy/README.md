# README #

This is the Codacy awesome styleguide, **under construction**. 
It will include components, code snippets and how to use. 

### Installation and Running ###

`grunt` run locally.
Styleguide should run on http://localhost:16009/

## To install on WINDOWS ##
* Install Ruby using the Ruby Installer
* Install Compass. Run command prompt with Ruby and run the following command:
`gem install compass`
* Install Node.js & NPM. Download the installer and run. http://nodejs.org/download/
* Open command prompt and run the following commands:Ensure that npm is up-to-date
`npm update -g npm`
* Install Grunt (you may need to be an administrator or ‘run as administrator’):
`npm install -g grunt-cli`

Styleguide should run using `grunt`

To set path environment on windows `set PATH=C:\Ruby200-x64\bin;%PATH%`

## To install on MAC OS X ##
* Install Compass. Open terminal and run the following command:
`sudo gem install compass`
* Install Node.js & NPM. Download the installer and run. http://nodejs.org/download/
* Open terminal and run the following commands:
* Ensure that npm is up-to-date
`npm update -g npm`
* Install Grunt (you may need to be an administrator or ‘run as administrator’):
`npm install -g grunt-cli`
or
`sudo npm install -g grunt-cli`

Styleguide should run using `grunt`

## Install git hooks ##
* pre-commit
	Runs grunt dist and adds minified files to the commit.
	`ln -s -f .hooks/pre-commit .git/hooks/pre-commit`

### Who do I talk to? ###

* Inês Isabel for questions about how to use and yada yada