import React from 'react';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import LineChat from './components/LineChar';

function App() {
  return (
    //<Provider store={store}>
      <div className="App">
        { /*<ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/> 
        <UserContainer/>*/}
         <div className = "chart">
           <LineChat/>
         </div>
      </div>
    //</Provider>
  );
}

export default App;
