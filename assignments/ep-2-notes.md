
## Created Basic React App 

Production ready React App - From scratch without using create react-app
 
In `create react-app,` they use webpack bundler 

to have a package in code -> we need Package Manager (eg : npm, yarn)

```properties
npm init => 
create package.json => 
initialize our repo with npm  
```

`npm init -y` to skip configuration

## why npm ? 
helper packages -> React app is powered by a lot of packages for bundling, optimizing, minifying 
maven : java :: rnpm : react 

## Parcel : 
npm install package-name -> to install a package named package-name  & node modules (helper functions )is created 

npm install -d package-name -> -D means dev dependency or --save-dev

package-lock.json is created and parcel code is updated in node modules 

parcel is in dev dependencies of package-lock  - parcel is needed in dev environment 
~ update for major version
^ automatic update for minor version
without anything - exact version

if update happens, package.json is updated but package-lock.json is not updated 

package-lock.json - don't ignore in git 


if i have package-lock.json -> i can regenerate node modules 

react cdn - not good way 
Good way -> in server thrugh node modules 

npm install react -> in global dependencies not dev dependencies 

npx parcel index.html -> Execute using npm with index.html as entry point -> Creates local server 

Parcel gives us this server

Error : React is defined because we removed cdn link. Instead of that, we have to use import since this time we are using node modules - npm

Error : Browser doesnot understand import -> we have to inform its modules, use type="module" in script tag

Warning : React DOM  -> createRoot is not found -> use  react-dom/client 

Live Server -> Auto refresh  -> Hot Module Replacement (HMR) 
-> Parcel does it for us using File Watcher Algorithm (written in c++)
Parcel.cache -> uses this space for doing all the HMR, minify and other stuffs 
dist folder -> minified code in dist 
npx parcel build index.html -> production ready build is created by parcel inside dist folder and has only 3 files : css, html and js file containing 
all the code including react code 

we should put .parcel-cache in gitignore
`anything which can be autogenerated in server can be put in gitignore `

Initial dev build -> longer time (500ms) -> for next build -> takes less time 5ms using caching

Summary Steps : 
1. npm init 
2. npm install -D parcel 
3. npm install react 
4. npm install react-dom
5. npx parcel index.html or npx parcel build index.html
6. import React from 'react'; in App.js
7. import ReactDOM from 'react-dom/client'; in App.js 
8. use type="module" for index.html
9. Remove main : app.js from package.json
10. Write browserslist in package.json 

"browsersList" : [ "last 2 chrome versions"]