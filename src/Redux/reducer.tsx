
type rootReducerType = {
    todoList: {}[];
    filters: {
        search: string;
    };
}

const initState = {
    filters:{
        search:''
    },
    todoList:[
        {
            id:1,name:'thanh',completed:false
        }
    ]
}

const rootReducer = (state= initState,  action: { type: any }):rootReducerType => {
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    {}
                ]
            }
        default:
            return state       
    }
}

export default rootReducer