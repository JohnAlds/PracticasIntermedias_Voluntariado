import {Navigate, Routes, Route} from 'react-router-dom';
import { UsersForm } from './UsersForm';
import { Users } from './Users';


export const Principal = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<UsersForm />}/>
            <Route path="users" element={<Users />}/>
            <Route path="/*" element={<Navigate to="/users" />}/>
        </Routes>
    </>
  )
}
