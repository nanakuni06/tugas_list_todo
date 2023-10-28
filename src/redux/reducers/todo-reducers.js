const initialValue = {
    todos: [],
    isLoading: false,
    error: ""
}

function todoRecucer(state = initialValue, action){
    switch(action.type){
        case "START_FETCHING":
            return{
                ...state,
                isLoading: true
            }
        case "SUCCESS_GET_TODO":
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case "DELETE_TODO":
            return{
                ...state,
                isLoading: false,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        default: return state;
    }
}

export default todoRecucer