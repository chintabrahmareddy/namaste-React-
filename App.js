
const parent = React.createElement("div",{id : "parent"},[
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},["Hello World"]),
        React.createElement("p",{},["This is a paragraph"])
    ]),
    React.createElement("div",{id : "child"},[
        React.createElement("h1",{},["Hello World"]),
        React.createElement("p",{},["This is a paragraph"])
    ]),
    ]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
