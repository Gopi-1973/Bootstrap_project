import Myroute from "./Myroute";

import store from "./redux/reducer/store";
    //to create store to reducer
import { createStore } from "redux";
    // to provide Data into component
import { Provider } from "react-redux";

import { combineReducers } from "redux";
import student from "./redux/reducer/student";
function App() {
  const reducers = combineReducers({
    cartData : store,
    studentData : student 
  })
  const reducerData = createStore(reducers)

  return (

<Provider store = {reducerData}>

<Myroute/>

</Provider>

  

  );

}


export default App;
