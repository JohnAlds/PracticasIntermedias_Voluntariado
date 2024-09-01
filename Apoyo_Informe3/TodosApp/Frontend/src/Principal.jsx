import {Navigate, Routes, Route} from 'react-router-dom';
import { TodoForm } from './TodoForm';
import { Todos } from './Todos';


export const Principal = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<TodoForm />}/>
            <Route path="todos" element={<Todos />}/>
            <Route path="/*" element={<Navigate to="/todos" />}/>
        </Routes>
    </>
  )
}
