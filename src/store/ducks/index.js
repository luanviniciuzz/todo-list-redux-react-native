import { combineReducers } from "redux";

import todo_list from './todolist/TotoList';

export default combineReducers({
    
    todo_reducer: todo_list
    
})