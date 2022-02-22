export const TYPES = {
    ADD_TODO: 'todo_reducer/ADD_TODO',
    REMOVE_TODO: 'todo_reducer/REMOVE_TODO'
}

let INITIAL_STATE = {
    todo_list: [],
}
export default function todo_reducer(state = INITIAL_STATE, action){
    switch (action.type){
        case TYPES.ADD_TODO:
            return {...state, todo_list: [...state.todo_list, action.payload]}
        case TYPES.REMOVE_TODO:
            let nova_todo = state.todo_list.filter((e) =>{
                if(e != action.payload){
                    return e
                }
            })
            return {...state, todo_list: nova_todo}
    }
    return state;
}

export const Creators = {
    add_todo: todo => ({
        type: TYPES.ADD_TODO,
        payload : todo
    }),
    remove_todo: todo => ({
        type: TYPES.REMOVE_TODO,
        payload: todo
    })
}