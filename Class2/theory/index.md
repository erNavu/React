## What is NPM ?

- World's Largest Software Registry (Library).
- `Open-source` developers use `npm` to share software.
- `npm` is free to use.

npm includes a `CLI (Command Line Client)` that can be used to download and install software:
```html
>npm install <package>
```
The CLI runs from a terminal, and is how most developers interact with npm.

npm is used to manage our packages.

#### Installing npm
`npm` is installed with `Node.js`

This means that you have to install `Node.js` to get npm installed on your computer.

All npm packages are defined in files called `package.json`.

The content of package.json must be written in `JSON`.

At least two fields must be present in the definition file: `name` and `version`.

#### Reference : https://docs.npmjs.com/about-npm , https://medium.com/@hossam.hilal0/package-json-vs-package-lock-json-vs-npm-shrinkwrap-json-33fcddc1521a

## Why we need npm ?
We need to manage a lot of packages because react is powered by a lot of things (helper packages).

With npm init we get package.json.

```HTML
npm init 
```

## What is ^ caret and ~ tilda ?
^version “Compatible with version”, will update you to all future minor/patch versions, without incrementing the major version. ^2.3.4 will use releases from 2.3.4 to <3.0.0.
example :``` ^2.3.4 => 2.*.*```

~version “Approximately equivalent to version”, will update you to all future patch versions, without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to <1.3.0. example ```~1.2.3 => 1.2.*```


!["^ caret and ~ tilda"](../theory/assets/tilde-carett.jpeg?raw=true "^caret and ~tilda")

## What is package.json ?
```package.json``` file is common file which has all information of packages required by our application, also known as dependencies.

All data stored in the package.json has a technical name i.e., ```metadata```.

It includes information such as the project's name, version, description, authors, license, and required dependencies.
!["packageJson"](../theory/assets/dependencies.webp?raw=true)

## What is package-lock.json file?

```package-lock.json``` has same purpose as package.json file but this is used in real hosting environment instead of local or development environment.

The `package-lock.json` file is generated when dependencies are installed and contains a detailed, exact list of all the dependencies and their versions. It helps ensure that everyone working on the project has the same version of the dependencies.
!["packageLockJson"](../theory/assets/package_lock.webp?raw=true)

It locks the versions of libraries for production use.

`Never put package-lock.json file in git ignore.`

!["packageLockJson"](../theory/assets/lockFile.webp?raw=true)

## Why should I not modify `package-lock.json`?
`It is a generated file and is not designed to be manually edited.` Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. 

Modifying `package-lock.json` is generally not recommended because it can disrupt the dependency tree of your project and lead to unexpected results. It is best to modify the `package.json` file to add/remove/update dependencies and then run `npm install` to generate a new `package-lock.json` file.


## What is a JavaScript module bundler ?
 A bundler is a development tool that combines many JavaScript code files into a single one that is production-ready loadable in the browser.
 
 ``Reference``: https://snipcart.com/blog/javascript-module-bundler


##  What is `Parcel/Webpack`? Why do we need it? 

```HTML 
Parcel.js is an open-source bundler
```

`Reference :` https://parceljs.org/

`Note` : In create-react--app, it uses webpack.

```properties
npx parcel index.html
```
here
`npx`: it executes using npm
`index.html`: entry point 

```HTML
<script type="module" src="app.js"></script>
```
here `type="module"` : imports will work now 

Browser does not understand imports so it tell browser type="module" then imports works.

```properties
npx parcel build index.html
```
here `build`: production build 

it will minify your files and do a lot of things.

#### Declaring browser targets
By default Parcel does not perform any code transpilation. This means that if you write your code using modern language features, that’s what Parcel will output. You can declare your app’s supported browsers using the browserslist field. When this field is declared, Parcel will transpile your code accordingly to ensure compatibility with your supported browsers.

In package.json write `browserslist`
```properties
{
  "name": "my-project",
  "source": "src/index.html",
  "browserslist": "last 2 versions",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  }
   "devDependencies": {
    "parcel": "latest"
  }
}
```
here `last 2 versions` : compatible with last 2 verison of every browser.

When this field is declared, Parcel will transpile your code accordingly to ensure compatibility with your supported browsers.


### PARCEL BENEFITS
* `HOT MODULE REPLACEMENT (HMR)`:
feature offered by webpack/parcel allows all kind of modules to be updated at runtime without the need for full reload. When you save the changes in code, it will be reflected in the browser without reload.

* `File watcher algorithm` : written in `c++` monitor changes to file

* `Dev server` : manage port number.  By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used.

* `Lazy mode`: You can use the `--lazy` CLI flag to tell Parcel to defer building files until they are requested in the browser, which can significantly reduce development build times. The server starts quickly, and when you navigate to a page for the first time, Parcel builds only the files necessary for that page. When you navigate to another page, that page will be built on demand. If you navigate back to a page that was previously built, it loads instantly.
This also works with dynamic `import()`

    ```js
    parcel 'pages/*.html' --lazy
    ```
* `Bundling` : `dist folder` includes 3 main files 
    * index.623478.css
    * index.______.js
    * index.html
    * and some map files 
    
    `dist folder` includes all the production files.

* `Caching`: By default, the cache is stored in the `.parcel-cache folder `inside your project. You should add this folder to your .`gitignore`. Caching can also be `disabled` using the `--no-cache flag`.

* `Minify`: Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! Just run parcel build index.html, and your whole application will be built and optimized automatically.

* `Cleaning our code` : removing console, etc

* `Suferfast build algorithm`

* `Image Optimization` : In our website, media and images are the most heaviest thing on web browser when we load any website.

* `Compression` : example: renaming your variables, etc.

* `Compatible with older versions of browsers`

* `HTTPS on dev`: Sometimes, you may need to use HTTPS during development. For example, you may need to use a certain hostname for authentication cookies, or debug mixed content issues.

    ```properties
    npx parcel src/index.html --https
    ```

* `Consistent hashing algorithm`

* `Zero Config` : Parcel will automatically install all of the necessary plugins and dev dependencies for you!

* `Diagnostics` : If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.Every error includes a syntax highlighted code frame pointing to the exact location where the error occurred, along with hints about how to fix the issue.

## What is .parcel-cache
`.parcel-cache` folder stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

You should add this folder to your .gitignore so that it is not committed in your repo.

## What is npx ?
The npx stands for Node Package Execute and it comes with the npm. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package.

Npm is a package installation tool. Npx is a tool for executing packages. NPX is a npm package runner whose job it is to execute a package from the registry without ever installing it.

`Reference`: https://www.codingninjas.com/codestudio/library/difference-between-npm-and-npx

## What is difference between `dependencies` vs `devDependencies`

The difference between these two, is that `devDependencies` are modules which are only required during development, while `dependencies` are modules which are also required at runtime.

To save a dependency as a devDependency on installation we need to do an `npm install --save-dev,` instead of just an `npm install --save`.

## What is Tree Shaking?
`Tree-shaking is a concept in frontend development that involves the elimination of dead code or unused code`

By taking tree-shaking concepts into consideration when writing code, we can significantly scale down the bundle size by getting rid of unused JavaScript, thereby optimizing the application and increasing its performance.

`Principles behind Tree Shaking:`

* Declare all your imports and exports for each of your modules.
* The bundler (Webpack, Rollup, etc.) will analyze the dependency tree during your compilation step.
* Any unused code that can be proved is automatically dropped from your final bundle or tree shaken.

The reason tree shaking is very important is because most packages installed don’t really need all dependencies & this results in importing full packages, however what really needed is a small part of that package.

Lets have an `example`:

Importing `lodash` package using CommonJS Module. This import will fetch entire package & all the un required dependencies.

```js
const lodash = require('lodash'); 70.7K (gzipped: 24.7k)
```

Importing `lodash package using ES6 (ES2015) Module`. This import will only fetch specific dependency with tree shaking.

```js
import {isArray} from 'lodash'; 1K (gzipped: 505)
```

As seen in example above the `size of bundle is drastically reduced `in ES6 import as compared to CommonJS module import.

## Tree shaking parcel

In production builds, Parcel statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called `"tree shaking" or "dead code elimination"`. Tree shaking is supported for both static and dynamic import(), CommonJS and ES modules, and even across languages with CSS modules.

Parcel also concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called `“scope hoisting”`. This helps make minification more effective, and also improves runtime performance by making references between modules static rather than dynamic object lookups.

`Reference` : https://parceljs.org/features/scope-hoisting/

## What is Hot Module Replacement & how it works ?

HMR allows you to exchange, add, or remove JavaScript modules while the application is running, all without having to reload the browser. This is made possible in Webpack by creating an HMR server inside Webpack Development Server (webpack-dev-server) that communicates with HMR runtime in the browser through a websocket.

`Reference`: https://blog.bitsrc.io/webpacks-hot-module-replacement-feature-explained-43c13b169986

## What is `.gitignore`? What should we add and not add into it?
A .gitignore file is a text file placed in your git repository that tells git not to track certain files and folders that you don’t want being uploaded to your master repository. It has a lot of uses, and you will almost always need to configure it if you’re setting up a new repo.

example:In Node JS projects, there is a folder called `node_modules` that contains all the external packages that your code needs to run. You can delete this directory and completely rebuild it by running `npm install`, which uses the `package.json` configuration to search for packages.

So what’s the point of having the node_modules folder in Git? There isn’t one really, as it’s more complicated, can cause issues, and can even drastically increase the size of the Git repo in many cases.If you ignore the whole directory, all of your coworkers can `still generate` their own local copy from the package.json file.

```properties
# Binaries for programs and plugins
*.exe
*.exe~
*.dll
*.so
*.dylib
# Test binary, built with `go test -c`
*.test
# Output of the go coverage tool, specifically when used with LiteIDE
*.out
# Dependency directories (remove the comment below to include it)
vendor/ 
```
*  `*`is used as a wildcard match *.exe will ignore any file with the .exe extension
* `/` is used to ignore pathnames relative to the gitignore file.`/` will ignore directories with the name. `vendor/` ignores the vendor directory.
* ` #` is used to add comments to a .gitignore file
* `[…]` will ignore values with any of the values.
    * `*.[abc]` ignores files file.a, file.b, file.c.
    * `*.[a-*.[oa]d]` the dash will include a range, in this case, file extensions a-d.

```properties
# Ignore Mac system files
.DS_store

# Ignore node_modules folder
node_modules

# Ignore all text files
*.txt

# Ignore files related to API keys
.env

# Ignore SASS config files
.sass-cache
```


#### Items to put in the .gitignore
* `System-specific files`
System-specific files need to get ignored. But, you can add these files to a global ignore file instead of the repo’s ignore file.
* `Vscode workspaces`
Items like a vscode workspace need to be ignored.
* `Security and API keys/secrets`
For security, the security key files and API keys should get added to the gitignore. (That is, if they’re even stored in the directory). Every commit is recorded in the history of a GitHub repo. If a key is submitted, even if it is taken down immediately after, a record of the key exists in that commit.

## What is `node_modules` ? Is it a good idea to push that on git?

`node_modules` is a folder that contains all of the dependencies and libraries that a project needs in order to work. It is not a good idea to push `node_modules` on git, as it can be quite large and will take up a lot of space. Additionally, that are installed by the Node Package Manager (npm). 

##  What is the `dist` folder?
The `dist` folder is a folder created when compiling a web application. It stands for `"distribution"` and contains the `production-ready version of the application`. It includes the minified, optimized and compressed files of the application.

## What is `browserlists` ?
 It is used to `ensure cross-browser compatibility` of web applications. It helps developers and designers to test their websites and applications on multiple browsers and platforms for consistent results.

Add the following to `package.json`:
```json
  "browserslist": [
      "last 2 version"
  ]
```

here  `"last 2 version"` means make compatible with last 2 version of every browser

ref : https://github.com/browserslist/browserslist#readme, https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z

## Read about dif bundlers: vite, webpack, parcel
`Vite`- Vite is a modern, lightweight build tool for front-end development. It is designed for development speed and focuses heavily on providing an optimized setup for TypeScript and Vue projects.

`Webpack` - Webpack is an open-source JavaScript module bundler. It takes in modules with dependencies and generates static assets based on these dependencies. It is configurable, and can be used to bundle any type of project, from websites to Cordova applications.

`Parcel` - Parcel is a web application bundler, designed to make it easy to develop and deploy applications. It works similar to Webpack, but is more focused on providing an easy to use setup and fast performance. It requires less configuration and is optimized for projects using HTML, JavaScript, and CSS.

## Read about Script types in html

The script tag is used for specifying JavaScript which should be run in a webpage. A script tag can either include the JavaScript directly, or it can point to a URL where the script should be loaded from.

`Script tags are executed in the order they appear`

```html
<script>
  var x = 3;
</script>
<script>
  alert(x);
  // Will alert '3';
</script>
```

It is less intuitive (but no less true) when working with external resources.

```html 
<script src="//typekit.com/fj3j1j2.js"></script>

<!-- This second script won’t execute until
 typekit has executed, or timed out -->
<script src="//my.site/script.js"></script>
```
It similarly works for combinations of local and remote scripts.

`When a script tag executes, everything above it in the DOM is available (but not everything below).`

```html
<html>
  <head>
    <script>
      // document.head is available
      // document.body is not!
    </script>
  </head>
  <body>
    <script>
      // document.head is available
      // document.body is available
    </script>
  </body>
</html>
```
### Attributes of HTML script tag
| `Attribute` |`Description `   |
| :---:   | :---: | 
| `src` |It specifies the URL of an external script file.|
| `type` |It specifies the media type of the script.|
|`async `|It is a boolean value which specifies that the script is executed asynchronously. |
| `defer` |It is a boolean value which is used to indicate that script is executed after document has been parsed.|  

```html
<script type="text/javascript" src="message.js" />  
```

Read in more detail here : https://eager.io/blog/everything-I-know-about-the-script-tag/, 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script


`References for knowledge `
* Creating your own create-react-app : https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658
* Parcel Documentation : https://parceljs.org/getting-started/webapp/
* Parcel on Production : https://parceljs.org/features/production/