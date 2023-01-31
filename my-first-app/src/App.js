import React from "react";
import "./App.css";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import Cards from "./components/CardsComponent";

const featuresArray = [
  {
    title: "Declarative",
    image: "./images/img1.png",
    description: "React makes it painless to create interactive UIs.",
  },
  {
    title: "Components",
    image: "./images/img2.png",
    description: "Build encalpsulated components that manage their state",
  },
  {
    title: "Single-way",
    image: "./images/img3.png",
    description: "A set of immutable values are passed to the components",
  },
  {
    title: "JSX",
    image: "./images/img4.png",
    description: "Statically typed, designed to run on modern browsers",
  },
];

function App() {
  return (
    <div className="app">
      <FirstComponent />
      <SecondComponent />
      <div className="secondSection">
        {featuresArray.map((props) => (
          <Cards
            key={props.title}
            title={props.title}
            image={props.image}
            description={props.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
