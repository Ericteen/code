# Responsive Web Designe
The web  is  written  by using HTML, CSS, JavaScript, jQuery. It is a responsive web by using media queries to change the user interface of different user devices.

### Contents
- [requirements](#requirements)
- [installation](#installation)
- [about](#about)
- [license](#license)

### Requirements
Should be globally installed
- node.js 0.12.x
- gulp 4.x

If `nvm`  isn't installed yet: `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.3/install.sh | bash`

to install `node` and `gulp`:
```
nvm install 0.12.2
npm uninstall gulp -g
npm install gulpjs/gulp-cli#4.0 -g
```

### Installation
```
git clone https://github.com/Ericteen/code/tree/master/Responsive
cd web
npm install gulp
```

### About

To preview different layouts of the web page 
, ![view 800px layout](https://github.com/Ericteen/code/blob/master/Responsive%2Fsrc%2Fimg%2F800px.png)
 , ![view 480-800px layout](https://github.com/Ericteen/code/blob/master/Responsive%2Fsrc%2Fimg%2F480-800px.png)
 , ![view 480px layout](https://github.com/Ericteen/code/blob/master/Responsive%2Fsrc%2Fimg%2F480px.png).

Gulp supports watching && live reload of your browser on project's files change.

`gulp develop && gulp serve` - compile project one time for develop and run web server `gulp production && gulp serve` - compile project one time for production and run web server

### License
Open source. This project is licensed under the GPL v3 license. Check license for more information.