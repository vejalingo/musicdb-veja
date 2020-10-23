import React from "react";
import { Navigation, Charts } from "./shared/components";

function App() {
  return (
    <div className="app">
      <header>
        <Navigation />
      </header>
      <main>
        <Charts />
      </main>
    </div>
  );
}

export default App;
