import { createSlice } from "@reduxjs/toolkit";

import data from "../data.json";

// import { addNotification } from './NotificationSlice';


// Retrieve initial state from local storage or set default state
const initialState = JSON.parse(localStorage.getItem("boards")) || [];




const BoardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const isActive = state.length > 0 ? false : true;
      const payload = action.payload;
      const board = {
        name: payload.name,
        isActive,
        columns: [],
      };
      board.columns = payload.newColumns;
      state.push(board);
      saveToLocalStorage(state);
      // // Dispatch a notification
      // action.asyncDispatch(addNotification({
      //   message: `Board '${action.payload.name}' added successfully.`,
      //   type: 'success'
      // }));
    },
    editBoard: (state, action) => {
      const payload = action.payload;
      const board = state.find((board) => board.isActive);
      board.name = payload.name;
      board.columns = payload.newColumns;
      saveToLocalStorage(state);
      // // Dispatch a notification
      // action.asyncDispatch(addNotification({
      //   message: `Board '${action.payload.name}' edited successfully.`,
      //   type: 'success'
      // }));
      
    },
    deleteBoard: (state) => {
      const board = state.find((board) => board.isActive);
      state.splice(state.indexOf(board), 1);
      saveToLocalStorage(state);
      // Dispatch a notification
     
      
    },
    setBoardActive: (state, action) => {
      state.map((board, index) => {
        index === action.payload.index
          ? (board.isActive = true)
          : (board.isActive = false);
        return board;
    
        
        
      });
    },
    addTask: (state, action) => {
      const { title, status, description, subtasks, newColIndex } =
        action.payload;
      const task = { title, description, subtasks, status };
      const board = state.find((board) => board.isActive);
      const column = board.columns.find((col, index) => index === newColIndex);
      column.tasks.push(task);
      saveToLocalStorage(state);
      // // Dispatch a notification
      // action.asyncDispatch(addNotification({
      //   message: `Board '${action.payload.name}' Task added successfully.`,
      //   type: 'success'
      // }));
    
    },
    editTask: (state, action) => {
      const {
        title,
        status,
        description,
        subtasks,
        prevColIndex,
        newColIndex,
        taskIndex,
      } = action.payload;
      const board = state.find((board) => board.isActive);
      const column = board.columns.find((col, index) => index === prevColIndex);
      const task = column.tasks.find((task, index) => index === taskIndex);
      task.title = title;
      task.status = status;
      task.description = description;
      task.subtasks = subtasks;
      if (prevColIndex === newColIndex) return;
      column.tasks = column.tasks.filter((task, index) => index !== taskIndex);
      const newCol = board.columns.find((col, index) => index === newColIndex);
      newCol.tasks.push(task);
      saveToLocalStorage(state);
      // Dispatch a notification
      // action.asyncDispatch(addNotification({
      //   message: `Board '${action.payload.name}' Task edited successfully.`,
      //   type: 'success'
      // }));
     
    },
    dragTask: (state, action) => {
      const { colIndex, prevColIndex, taskIndex } = action.payload;
      const board = state.find((board) => board.isActive);
      const prevCol = board.columns.find((col, i) => i === prevColIndex);
      const task = prevCol.tasks.splice(taskIndex, 1)[0];
      board.columns.find((col, i) => i === colIndex).tasks.push(task);
      saveToLocalStorage(state);
   
    },
    setSubtaskCompleted: (state, action) => {
      const payload = action.payload;
      const board = state.find((board) => board.isActive);
      const col = board.columns.find((col, i) => i === payload.colIndex);
      const task = col.tasks.find((task, i) => i === payload.taskIndex);
      const subtask = task.subtasks.find((subtask, i) => i === payload.index);
      subtask.isCompleted = !subtask.isCompleted;
      saveToLocalStorage(state);
      
    },
    setTaskStatus: (state, action) => {
      const payload = action.payload;
      const board = state.find((board) => board.isActive);
      const columns = board.columns;
      const col = columns.find((col, i) => i === payload.colIndex);
      if (payload.colIndex === payload.newColIndex) return;
      const task = col.tasks.find((task, i) => i === payload.taskIndex);
      task.status = payload.status;
      col.tasks = col.tasks.filter((task, i) => i !== payload.taskIndex);
      const newCol = columns.find((col, i) => i === payload.newColIndex);
      newCol.tasks.push(task);
      saveToLocalStorage(state);
    },
    deleteTask: (state, action) => {
      const payload = action.payload;
      const board = state.find((board) => board.isActive);
      const col = board.columns.find((col, i) => i === payload.colIndex);
      col.tasks = col.tasks.filter((task, i) => i !== payload.taskIndex);
      saveToLocalStorage(state);
      // // Dispatch a notification
      // action.asyncDispatch(addNotification({
      //   message: `Board '${action.payload.name}' Task deleted successfully.`,
      //   type: 'success'
      // }));

    },
  },
});
// Save state to local storage
const saveToLocalStorage = (state) => {
  localStorage.setItem("boards", JSON.stringify(state));
};

export const { addBoard, editBoard, deleteBoard, addTask,editTask,deleteTask,dragTask,setSubtaskCompleted,setTaskStatus } = BoardSlice.actions;
export default BoardSlice;
