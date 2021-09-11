//constainer folders has all the components.

import { createStore } from "redux";
import reducers from "./reducers/index"
//store needs reducers and states
const store = createStore(reducers, 
    {}, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;