import { createContext,useContext,useState } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo: "Todo Msg",
        completed: false,
        category:"work",
        dueDate:""
    }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    selectedCategory:'',
    setSelectedCategory: (category) => {}
})

export const useTodo = () => {
   return useContext(TodoContext)
}

export const TodoProvider =({children,value})=>{
    const [selectedCategory, setSelectedCategory] = useState('');
    
    return (
        <TodoContext.Provider value={{ ...value, selectedCategory, setSelectedCategory }}>
            {children}
        </TodoContext.Provider>
    );
}