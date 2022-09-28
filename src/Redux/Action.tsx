

export const addTodo = (data: {id:string,name:string,completed:boolean}) => {
    return {
        type:'todoList/addTodo',
        payload:data
    }
}