import { Col,Row,Input,Button,Select,Tag } from 'antd'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/Action'
import {v4 as uuidv4} from 'uuid'
import React, {  useState } from 'react'


export default function TodoList(){
    const [todoName,setTodoName] = useState('')
    const dispatch = useDispatch()
    const handleAddButtonClick = () => {
        dispatch(addTodo({
            id: uuidv4(),
            name:todoName,
            completed:false
        }))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){
            setTodoName(e.target.value)
        }
    }

    return (
        <div>
            <input
                value={todoName}
                onChange={handleInputChange}
            />
            <button onClick={handleAddButtonClick}> Add</button>
        </div>
    )
}