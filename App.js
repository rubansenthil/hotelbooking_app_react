import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
      <div className="my-app">
        <Header/>
        {/* <Route path='/' component={Header}></Route>  */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
