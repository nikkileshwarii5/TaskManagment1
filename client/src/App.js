import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector} from "react-redux";
import Header from "./components/Header";
import EmptyBoard from './components/EmptyBoard';
import Home from "./components/Home";
import BoardSlice from "./redux/BoardSlice";
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './context/UserContext';
import axios from 'axios';
import Dashboard from './DashBoard/Dashboard';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
<script src="http://192.168.0.113:8097"></script>






const App = () => {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards);
  const [tasks, setTasks] = useState([]);
  const activeBoard = boards.find((board) => board.isActive);
  if (!activeBoard && boards.length > 0)
    dispatch(BoardSlice.actions.setBoardActive({ index: 0 }));
  
    useEffect(() => {
      // Fetch tasks from localStorage or backend API
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
      setTasks(savedTasks);
    }, []);
  
    useEffect(() => {
      // Save tasks to localStorage whenever it changes
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const setTaskDueDate = (taskId, dueDate) => {
      // Update the due date of a task
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId ? { ...task, dueDate } : task
        )
      );
    };
  return (
  <UserContextProvider>

   {/* <NavBar/> */}
   <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
   <Routes>
   <Route path="/" element={<Navigate replace to="/register" />} />
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
   </Routes>

   <div className=" overflow-hidden  overflow-x-scroll">
      <>
        {boards.length > 0 ?
        <>
        <Header
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
        <Home
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
        />
        </>
        :
        <>
          <EmptyBoard type='add'/>
          
        </>
        
      
      }
        
      </>
    </div>
 
  </UserContextProvider>


  //DASHBOARD CODE//
  
  )
}

export default App;
