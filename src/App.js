import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Framer motion
import { AnimatePresence } from 'framer-motion';
//Styles
import './App.scss';

//Pages
import Home from './pages/home';
import Artist from './pages/artist';

function App() {
  const imageDetails = {
    width: 750,
    height: 450
  };

  return (
    <>
      <Router>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path="/"
                  render={() => <Home imageDetails={imageDetails} />}
                />
                <Route
                  exact
                  path="/artist/:id"
                  render={() => <Artist imageDetails={imageDetails} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </Router>
    </>
  );
}

export default App;
