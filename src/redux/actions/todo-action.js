import axios from "axios"

function startFacthing(){
    return{
        type: "START_FETCHING"
    }
}

function successGetTodo(data){
    return{
        type: "SUCCESS_GET_TODO",
        payload: data
    }
}

export function getTodo(){
    return async function (dispatch){
        dispatch(startFacthing())

        const {data} = await axios("https://6539340ce3b530c8d9e81ae7.mockapi.io/api/v1/user")

        dispatch(successGetTodo(data))
    }
}

export const addTodo = (newTodo) => async (dispatch) => {
    dispatch(startFacthing());

    await axios.post("https://6539340ce3b530c8d9e81ae7.mockapi.io/api/v1/user", newTodo)

    dispatch(getTodo());
}

export const deleteTodo = (todoId) => async (dispatch) => {
    dispatch(startFacthing());

    await axios.delete(`https://6539340ce3b530c8d9e81ae7.mockapi.io/api/v1/user/${todoId}`  );

    dispatch(getTodo())
}