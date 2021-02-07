import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Framer motion
import { AnimatePresence } from 'framer-motion';
//Styles
import './App.scss';

//Pages
import Home from './pages/home';
import Artist from './pages/artist';

//components
import Header from './components/Header';

function App() {
  const imageDetails = {
    width: 750,
    height: 'auto'
  };
  return (
    <>
      <Router>
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
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
