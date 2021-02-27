import logo from './logo.svg';
import './App.css';
import Home from './pages/home/home';
import Error from './pages/error/error';
import { DataProvider } from './GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
          <Error />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
