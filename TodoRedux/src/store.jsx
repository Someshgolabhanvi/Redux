import { createStore } from 'redux'

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete"

const intialState = {
    task : [],
}


const taskReducer = (state = intialState , action)=>{
    switch(action.type){
        case ADD_TASK:
            return {
                ...state,
                task: [...state.task,action.payload]
            }
        case DELETE_TASK:
            const updatedTasks =  state.task.filter((curTask,index)=>{
                return index !== action.payload;
            })
            return {
                ...state,
                task:updatedTasks,
            }

        default :
            return state;
    }
}

export const store = createStore(taskReducer);
console.log(store);
console.log("Initial State",store.getState());
store.dispatch({type: ADD_TASK, payload:"React"})
console.log("Task Added:",store.getState());
store.dispatch({type: ADD_TASK, payload:"React-Redux"})
console.log("Task Added:",store.getState());
store.dispatch({type: DELETE_TASK, payload:1})
console.log("Task Added:",store.getState());


export const addTask = (data) =>{
    return {type: ADD_TASK, payload:data}
}
store.dispatch(addTask("React1"))
console.log("Task Added:",store.getState());

export const deleteTask = (id) =>{
    return {type:DELETE_TASK , payload:id}
}

store.dispatch(deleteTask(1))
console.log("Task Added:",store.getState());


