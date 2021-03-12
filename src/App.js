import './App.css';
import Home from './pages/home/home';
import Error from './pages/error/error';
import { DataProvider } from './GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TokenExchange from './pages/exchange/tokenExchange';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
              />
            )}
          />
          <Route
            exact
            path="/tokenexchange"
            render={() => (
              <TokenExchange
              />
            )}
          />
          <Error />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
