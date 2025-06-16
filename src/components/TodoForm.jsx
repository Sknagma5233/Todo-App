import React, { useState } from 'react';
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const [category, setCategory] = useState("");
    const [dueDate, setDueDate] = useState("");
    const { addTodo } = useTodo();

    const add = (e) => {
        e.preventDefault();

        if (!todo || !category || !dueDate) return; // Ensure fields are filled
        addTodo({ todo: todo, completed: false, category: category.toLowerCase(), dueDate: dueDate });
        setTodo("");
        setCategory("");
        setDueDate("");
    };

    return (
        <div className='p-4 sm:p-6 mt-6'>
            <form onSubmit={add} className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-3'>
                <div className='flex flex-col sm:flex-row border border-black rounded-lg bg-white p-4 space-y-4 sm:space-y-0 sm:space-x-3'>
                    
                    {/* Color Dots */}
                    <div className='flex space-x-2 ml-3 sm:mt-3'>
                        <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                        <div className="w-3 h-3 rounded-full bg-green-300"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-200"></div>
                        <div className="w-3 h-3 rounded-full bg-red-300"></div>
                    </div>

                    {/* Task Input */}
                    <input
                        type='text'
                        placeholder='New Task, Who Dis?'
                        className='w-full sm:w-[22rem] rounded-lg px-3 duration-150 bg-white py-2 outline-none'
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />

                    {/* Date Input */}
                    <input
                        type="date"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                        className=" p-2 text-sm w-full sm:w-[7rem] rounded-lg outline-none bg-white py-2"
                    />

                    {/* Category Select */}
                    <select
                        className='p-2 outline-none bg-white text-sm w-full sm:w-36 rounded-lg py-2'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                        <option value="study">Study</option>
                        <option value="social">Social</option>
                    </select>

                    {/* Add Button */}
                    <button
                        type='submit'
                        className='rounded-lg w-full sm:w-20 px-3 bg-purple-400 text-white py-2'
                    >
                        Add
                    </button>

                </div>
            </form>
        </div>
    );
}

export default TodoForm;

