import React from "react";
import New1 from "./Component/new1";
import New2 from "./Component/new2";
import New3 from "./Component/new3";
import New4 from "./Component/new4";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Contact Form</h1>
          <New1 />
          <New2 />
          <New3 />
          <New4 />
        </div>
      </header>
    </div>
  );
}

export default App;
