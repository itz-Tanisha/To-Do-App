import { useRef } from 'react'
import todo_icon from '../assets/todo_icon.png'
import ToDoItems from './ToDoItems'
import { useState } from 'react'

const Todo = () => {

    // 1 : Initialise an empty to do array
    const [todoList, setTodoList] = useState([]);

    // 2 : add task functionality using useRef Hook
    const inputRef = useRef();

    const add = () =>{
        const inputText = inputRef.current.value.trim();

        if(inputText === ""){
            return null;
        }

        const newTodo = {
            id : Date.now(),
            text : inputText,
            isComplete : false
        }

        setTodoList( (prev) => {
            return [...prev, newTodo];
        });

        inputRef.current.value = "";
    }

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        
        
        {/* --------title--------- */}
        <div className=" flex items-center mt-7 gap-2">

            <img src={todo_icon} alt="" className='w-8' />
            <h1 className="text-3xl font-semibold">To-Do List</h1>
            
        </div>

        {/* --------Input box--------- */}
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>

            <input type="text" placeholder='Add your task' 
            className='bg-transparent border-0 outline-none flex-1 h-14 pl-8 pl-2 placeholder:text-slate-600'

            ref={inputRef}
            />
            <button 
            className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
            onClick={add}
            >ADD</button>
        </div>

        {/* -------- To Do List -------- */}
        <div>
            {
            todoList.map(
                (item, index) =>{
                    return <ToDoItems key={index}
                    text={item.text}
                    id ={item.id}
                    isComplete = {item.isComplete}
                    />
                }
            )
            }
            
        </div>


    </div>
  )
}

export default Todo