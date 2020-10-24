import React from "react";
import { Navigation } from "./shared/components";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useSearch } from "./shared/hooks/useSearch";
import Home from "./modules/home";
import SearchContext from "./shared/context";

function App() {
  const searchText = useSearch();

  return (
    <div className="app">
      <SearchContext.Provider value={searchText}>
        <header>
          <Navigation />
        </header>
        <BrowserRouter>
          <Switch>
            <Route component={Home} exact path="/" />
          </Switch>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
