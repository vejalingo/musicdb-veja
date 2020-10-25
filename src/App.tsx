import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Navigation } from "shared/components";
import { useSearch } from "shared/hooks/useSearch";
import SearchContext from "shared/context";
import Home from "modules/home";
import Artist from "modules/artist";

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
            <Route component={Artist} exact path="/artist/:id" />
          </Switch>
        </BrowserRouter>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
