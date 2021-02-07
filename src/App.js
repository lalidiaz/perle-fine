import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Framer motion
import { AnimatePresence } from 'framer-motion';
//Styles
import './App.scss';

//Pages
import Home from './pages/home';
import Model from './pages/artist';
//components
import Header from './components/Header';
import Artist from './pages/artist';

function App() {
  const imageDetails = {
    width: 750,
    height: 'auto'
  };
  return (
    <>
      <Router>
        <Header />

        <AnimatePresence initial={false} exitBeforeEnter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home imageDetails={imageDetails} />}
            />
            <Route
              path="/artist/:id"
              render={() => <Artist imageDetails={imageDetails} />}
            />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
