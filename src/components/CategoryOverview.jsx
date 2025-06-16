import React from 'react';
import { useTodo } from '../contexts';

function CategoryOverview() {
    const { todos, selectedCategory, setSelectedCategory } = useTodo();

    const categories = [
        { name: 'Work', color: 'bg-green-300' },
        { name: 'Study', color: 'bg-yellow-200' },
        { name: 'Personal', color: 'bg-blue-300' },
        { name: 'Social', color: 'bg-red-300' }
    ];

    const getTotalTaskCount = (category) => {
        return todos.filter((todo) => todo.category.toLowerCase() === category.toLowerCase()).length;
    }

    const getTaskCount = (category) => {
        return todos.filter((todo) => todo.category.toLowerCase() === category.toLowerCase() && !todo.completed).length;
    }

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            {categories.map((category) => (
                <div key={category.name} className="flex items-center mb-4 cursor-pointer text-xs sm:text-sm">
                    <span className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${category.color} mr-3`}></span>
                    <span 
                        className="flex-grow truncate" 
                        onClick={() => { 
                            console.log("clicked", category.name); 
                            setSelectedCategory(category.name.toLowerCase().trim()); 
                        }}
                    >
                        {category.name}
                    </span>
                    <span className="text-xs sm:text-sm mr-2">{getTotalTaskCount(category.name)} Tasks</span>
                    <span className="text-xs sm:text-sm">{getTaskCount(category.name)} Pending</span>
                </div>
            ))}
        </div>
    );
}

export default CategoryOverview;
