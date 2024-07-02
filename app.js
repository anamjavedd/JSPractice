    import React from "react"
    import ReactDOM from "react-dom/client"

    // const parent = React.createElement("div", {id:"parent"}, [React.createElement("div",{id:"child1"},[React.createElement("h1",{},"This is H1 tag"),
    //     React.createElement("h2", {},"This is H2 tag" )]), React.createElement("div",{id:"child2"},[React.createElement("h1",{},"This is child2 h1 tag"), 
    //         React.createElement("h2",{},"This is child2 h2 tag")]),]);




    // const jsxHeading = (<h1 className="jsx">Hi this is from JSX</h1>);

    // const root = ReactDOM.createRoot(document.getElementById("root"));

    const TitleComponent = () => (
        <h1>I AM THE TITLE COMPONENT</h1>
    )

    const HeadingComponent = () => (
        <div>
            <TitleComponent />
            <h2>I am a heading Component</h2>
        </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(<HeadingComponent />);