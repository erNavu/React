import React from "react";
import ReactDOM from "react-dom/client";

const element1 = React.createElement('h1', { key: "1" }, 'Heading');
const element2 = React.createElement('h2', { key: "element2" }, "sub heading ")
const heading1 = React.createElement('h1',
    { key: 'heading-1' },
    'Heading 1');
const heading2 = <h2 key="heading2">heading 2</h2>
const container = React.createElement('div',
    { id: 'container' },
    [element1, element2, heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);