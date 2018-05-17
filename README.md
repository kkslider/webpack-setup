## Project description

This is a webpack configuration set up to bundle various filetypes:

- [x] single javascript entry file as entrypoint into the application
- [x] handles ES6/React code with .js/.jsx extensions and outputs an ES5 .js bundle with a unique hash
- [x] compiles .scss code to a single .css file with a unique hash
- [x] handles .jpeg/.jpg/.png/.gif files and returns a link reference
- [x] handles .svg files and returns a base-64 data-encoded string if the file is smaller than 1 MB, or a link reference otherwise

## Getting started

1.  You will first want to pull down this repository and run `npm install` in your Terminal to download the needed dependencies
2.  Run `npm run build` in the terminal to have webpack run its configuration and output the bundle files
3.  Open `./dist/index.html` in the browser to see examples of all the filetypes rendering on the page
