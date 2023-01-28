## What is config driven ui 

Config driven UI is a pattern of developing user interfaces in React.js which relies on a configuration object rather than hard coded components. This configuration object allows developers to easily customize their UI elements by changing the values in the configuration object. This pattern is useful for creating user interfaces with a high level of flexibility and configurability.

In simple words, controlling UI depending upon config through Api (backend)

## Is JSX mandatory for React ?
JSX is not a requirement for using React. Using React without JSX is especially convenient when you don't want to set up compilation in your build environment. Each JSX element is just syntactic sugar for calling React.
JSX isn't required by React, most people find it useful as a visual aid when dealing with UI in JavaScript code. JSX is an Extension Syntax that allows writing HTML and Javascript together easily in React.
Take a look at the below code:

```js
const start = <h1> Here it comes, JSX </h1>
```

Although this is a simple JSX in React, the browser does not recognize it since it is not genuine Javascript code. That's why an HTML tag is applied to a variable that isn't a string but rather HTML code. So we utilize a tool like Babel, a JavaScript compiler/transpiler, to turn it into browser-friendly JavaScript code.

## Is ES6 mandatory for React ?

`No, ES6 is not mandatory for React`. React can be used with any JavaScript codebase, including ES5. However, using ES6 can help to improve the syntax of React code, making it easier to read and maintain.

## What is <React.Fragment></React.Fragment> and <></> ?
`A common pattern in React is for a component to return multiple elements.`
React.Fragment and <></> are two different ways to create a React fragment, which is a lightweight way to return multiple elements without wrapping them in an extra element. React fragments let you group a list of children without adding extra nodes to the DOM. They are especially useful when dealing with lists of children in React.

```js
render() {
  return (
    <React.Fragment> // <>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment> // </>
  );
}
```
## What is virtual DOM ?
`DOM stands for Document Object Model.`

Virtual DOM is an in-memory representation of real DOM. It is a lightweight JavaScript object which is a copy of Real DOM.

Updating virtual DOM in ReactJS is `faster` because ReactJS uses:
* Efficient diff algorithm
* Batched update operations
* Efficient update of subtree only
* Uses observable instead of dirty checking to detect the change : ReactJS uses observable’s to find the modified components. Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it.

Whenever setState() method is called, ReactJS `creates the whole Virtual DOM from scratch`. Creating a whole tree is very fast so it does not affect the performance. At any given time, ReactJS maintains `two virtual DOM`, one with the `updated state Virtual DOM` and other with the `previous state Virtual DOM.`

`ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM`

Explained very well: https://medium.com/@happymishra66/virtual-dom-in-reactjs-43a3fdb1d130

## What is Reconciliation in React ?

When you use React, at a single point in time you can think of the `render() `function as creating a tree of React elements. On the next state or props update, that render() function will return a different tree of React elements. React then needs to figure out how to efficiently update the UI to match the most recent tree.

There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the `state of the art algorithms `have a complexity in the order of `O(n3)` where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too expensive. Instead, React implements a` heuristic O(n) `algorithm based on two assumptions:

* Two elements of different types will produce different trees.
* The developer can hint at which child elements may be stable across different renders with a key prop.

`The Diffing Algorithm`

React uses a` heuristic-based algorithm` to determine which components in a tree have changed. It starts by comparing the element type, props, and state of the current and previous tree. If any of these have changed, React will update the tree. If not, it will continue to compare the subtrees of the current and previous tree. The algorithm works by comparing the keys of the elements in the subtree, and if the key is the same, it will be compared. If the keys are different, it assumes that the entire subtree has changed and re-renders it.

Ref : https://reactjs.org/docs/reconciliation.html

## What is React Fiber?
React Fiber is an internal engine change geared to make `React faster and smarter.` The `Fiber reconciler`, which became the default reconciler for `React 16 and above`, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.

Because `Fiber is asynchronous`, React can:

* Pause, resume, and restart rendering work on components as new updates come in
* Reuse previously completed work and even abort it if not needed
* Split work into chunks and prioritize tasks based on importance

This change allows React to break away from the limits of the synchronous stack reconciler. Previously, you could add or remove items, for example, but it had to work until the stack was empty, and tasks couldn’t be interrupted.

This change also allows React to fine-tune rendering components, ensuring that the most important updates happen as soon as possible.

ref : https://blog.logrocket.com/deep-dive-react-fiber/

## Why  we need keys on react ? when do we need keys in React?

Keys in React are used to `identify each element` in an array of elements. Keys should be given to the elements inside the array to give the elements a stable identity. This helps React keep track of changes in the DOM, allowing for better performance and avoiding unnecessary DOM manipulation. Keys are also necessary when dynamically creating components or elements, such as when creating a list of items. `Without the keys, React won’t be able to keep track of each element’s identity and will treat them all as one component`, causing it to render all of them instead of just the one that changed.

## Can we use Index as key ?
`It may break your application and display wrong data!`

Each item should have a `permanent and unique `property.

Let me explain, a key is the only thing React uses to identify DOM elements. What happens if you push an item to the list or remove something in the middle? If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.

# What is props in React ?

`Props === Function Parameters`

Props in React are the properties that are passed to the components to allow them to interact with each other. Props can be used to pass data into components, trigger state changes, and invoke methods. Props are also known as "properties" and are a core concept in React.



`references :`
* Index as key : https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
* React without JSX : https://reactjs.org/docs/react-without-jsx.html
* Virtual DOM : https://reactjs.org/docs/faq-internals.html
* Reconciliation: https://reactjs.org/docs/reconciliation.html
* React Fiber Architecture : https://github.com/acdlite/react-fiber-architecture
* React without es6: https://reactjs.org/docs/react-without-es6.html