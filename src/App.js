import './App.css';
import { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Main from './components/MainComponent';
import { Provider } from "react-redux";
import { Store } from "./redux/store";


const store = Store();
class App extends Component{

  render()  {
    return (
      <Provider store = {store}>
        <BrowserRouter >
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
