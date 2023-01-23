const element1 = React.createElement('h1', {}, 'Namaste React');
const heading1 = React.createElement('h1',
    { id: 'heading-1' },
    'Heading 1');
const heading2 = React.createElement('h2',
    { id: 'heading-2' },
    'Heading 2');
const container = React.createElement('div',
    { id: 'container' },
    [element1, heading1, heading2]);
console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);