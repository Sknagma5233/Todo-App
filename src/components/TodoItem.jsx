import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {
    const [isTodoEditable,setIsTodoEditable]=useState(false)
    const [todoMsg,setTodoMsg] = useState(todo.todo)
    const {updateTodo,deleteTodo,toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id,{...todo,todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }

    const categoryColors = {
        personal: "bg-blue-300",
        work: "bg-green-300",
        study: "bg-yellow-200",
        social: "bg-red-300",
    };
    
    const colorClass = categoryColors[todo.category] || "bg-gray-400";
    

  return (
    <>
    <div className='flex justify-center items-center my-3 pl-3 pr-3'>
    <div className={`flex w-full sm:w-[50rem]  border border-black rounded-lg px-1.5 py-3 gap-x-2 shadow-md shadow-white/50 duration-300 text-black
        ${todo.completed ? "bg-[#c6e9a7]" : "bg-gray-200" }`}
    >
         <div className={`w-3 h-3 sm:h-4 sm:w-4 rounded-full ${colorClass}  mt-1.5 sm:mt-2 flex-shrink-0`}></div>
        <input type='checkbox'
        className='cursor-pointer'
        checked={todo.completed}
        onChange={toggleCompleted}
        />
        <input type='text'
        className={`border outline-none w-[7.5rem] sm:w-[33rem] bg-transparent rounded-lg text-xs sm:text-base
            ${isTodoEditable ? "border-black px-2" : "border-transparent"}
            ${todo.completed ? "line-through" : ""}`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />

            <span
                className=' inline-flex text-xs sm:text-sm  truncate items-center'
            >Due : {todo.dueDate}</span>

        <button className='inline-flex w-6 h-6 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm border border-black justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={() => {
            if(todo.completed) return;

            if(isTodoEditable){
                editTodo();
            }
            else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        >
        {isTodoEditable ? "📁" : "📝"}
        </button>

        <button className='inline-flex  w-6 h-6 sm:w-8 sm:h-8 rounded-lg text-xs sm:text-sm border border-black justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
         onClick={() => deleteTodo(todo.id)}
         >
            ❌
        </button>
    </div>
    </div>  
    </>
  );
}

export default TodoItem;
