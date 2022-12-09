import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { todosReducers } from './reducers/todosReducers';
const middleware = [thunk];

const reducers = combineReducers({
    todos: todosReducers
})

const store = createStore(
    reducers, composeWithDevTools(applyMiddleware(...middleware))
)

export default store;