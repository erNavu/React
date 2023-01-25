import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import HeaderFunc from "./components/HeaderFunc";

const App = () => {

    // react without jsx 
    const h1 = React.createElement('h1', { key: "1" }, "Heading 1")
    const container = React.createElement("div", { className: 'title' }, ["Hi i am parent created using React.createElement", h1, React.createElement("h2", { key: "h2" }, "Heading 2 "), React.createElement("h3", { key: 3 }, "Heading 3")]);
    return (<div className="app">
        <Header />
        {container}

        <div className="titleJsx ">
            Hi i am parent created using jsx
            <h1 key={1}>Heading 1</h1>
            <h2 key={2}>Heading 2</h2>
            <h3 key={33}>Heading 3</h3>
        </div>
        <HeaderFunc />
    </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);