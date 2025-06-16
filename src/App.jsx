import { useEffect, useState } from 'react';
import { TodoProvider } from './contexts';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useTodo } from './contexts';
import Categories from "./components/CategoryOverview"
import Profile from './components/Profile';

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
 
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id)  => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id?
    {...prevTodo,completed:!prevTodo.completed}:prevTodo ))
  }

  // useEffect(() => {
  //   const checkDueDates = () => {
  //     const today = new Date();
  //     todos.forEach((todo) => {
  //       const dueDate = new Date(todo.dueDate);
  //       const diffInDays = (dueDate - today) / (1000 * 60 * 60 * 24);
  //       if (diffInDays <= 1 && !todo.completed) {
  //         alert(`Reminder: Task "${todo.todo}" is due soon!`);
  //       }
  //     });
  //   };
  
  //   checkDueDates();
  // }, [todos]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const {selectedCategory,setSelectedCategory} = useTodo();

  useEffect(() => {
    console.log("Selected Category Changed:", selectedCategory);
}, [selectedCategory]);

  const filteredTodos = selectedCategory
  ? todos.filter((todo) => {
      console.log(`Checking ${todo.category.toLowerCase()} against ${selectedCategory.toLowerCase()}`);
      return todo.category.toLowerCase() === selectedCategory.toLowerCase();
    })
  : todos;

    console.log("Selected Category: ", selectedCategory);
    console.log("Initial Todos: ", todos); 
  console.log("Filtered Todos: ", filteredTodos);

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete,selectedCategory,setSelectedCategory}}>
      <div className=' bg-purple-300 min-h-screen max-w-screen overflow-x-hidden  py-20'>
        <div className='flex  flex-col lg:flex-row mx-auto max-w-[374px] sm:max-w-7xl   sm:h-[35rem] border-4 border-white rounded-lg mt-1 sm:mt-6'>
          {/*Left Partition*/}
          <div className= ' lg:w-1/4 bg-white p-4  flex-shrink-0'>
          <Profile/>
          <h1 className=' mt-8 text-bold text-[#FF6F61] ml-5 text-xl sm:text-2xl'>"Dream it. Wish it. Do it."</h1>
          <Categories/>
          
          </div>

          {/*Right Partition*/}
          <div className='w-full lg:w-3/4 bg-purple-300  flex flex-col'>
          <h2 className='mt-9 ml-16 text-white text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wide '>
            Plan of Action 📃</h2>
          <TodoForm/>
        {/*Scrollable list*/}
          <div className='overflow-y-auto mt-4 space-y-4 mb-4 custom-scrollbar'>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App;
