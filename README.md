sca-seed
========

Provide base grunt configuration for static code analysis (JavaScript and PHP) using for it grunt.

To run analyse first check grunt dependencies (node, npm, grunt_cli).

http://nodejs.org/download/

https://docs.npmjs.com/getting-started/installing-node

http://gruntjs.com/getting-started

Second check global installation of phpcs util (https://github.com/squizlabs/PHP_CodeSniffer#installation)

```
composer global require "squizlabs/php_codesniffer=*"
```

or change bin property of grunt phpcs configuration (https://github.com/SaschaGalley/grunt-phpcs#bin)

```
phpcs: {
    options: {
        bin: 'vendor/bin/phpcs'
    }
}
```

Third you can change list of files for exclude from static code analysis (file .scarc)

```
{
	"exclude": [
		"node_modules/**/*",
		"bower_components/**/*",
		"vendor/**/*"
	]
}
```

Next step is install all dependencies

```
npm install
```

After that you can run analysis
```
grunt sca
```
or
```
npm sca
```

Also you can analyse just JavaScript or PHP code

```
grunt js-sca
npm js-sca
grunt php-sca
npm php-sac
```