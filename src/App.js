import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/about" component={(props) => <About/>}/>
          <Route path="/contact" component={(props) => <Contact/>}/>
          <Route path="/" component={(props) => <Home/>}/>
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
