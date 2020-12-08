import React from "react";
import Greeting from "./Greeting";

function App() {
    return (
        <div>
            <Greeting firstName="John" lastName="Doe" birthDate={new Date("2003-01-01T11:11:11.819Z")} />
        </div>
    );
}

export default App;