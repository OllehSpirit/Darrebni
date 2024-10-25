import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from './Components/NotFound';
import CompInsideComp from './Pages/CompInsideComp';
import CounterWithClassComp from './Pages/CounterWithClassComp';
import ToDoList from './Pages/ToDoList';
import Users from './Pages/User/Users';
import UseCallback from './Pages/UseCallback';
import UpdateUser from './Pages/User/UpdateUser';
import Tasks from './Pages/Task/Tasks';
import Header from './Components/Header';
import UpdateTask from './Pages/Task/UpdateTask';
import CounterRedux from './Pages/CounterRedux';
import MainHeader from './Components/MainHeader';
import AddPost from './Pages/Post/AddPost';
import Posts from './Pages/Post/Posts';
import UpdatePost from './Pages/Post/UpdatePost';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainHeader />}>
            <Route path='CompInsideComp' element={<CompInsideComp />} />
            <Route path='CounterWithClassComp' element={<CounterWithClassComp />} />    {/* useState and Class Component */}
            <Route path='ToDoList' element={<ToDoList />} />    {/* ToDO List */}

            <Route path='users' element={<Header />}>
              <Route index element={<Users />} />           {/* Add User & View Users */}
              <Route path='Tasks' element={<Tasks />} />  {/* Add Task & View Tasks */}
            </Route>
            <Route path='UseCallback' element={<UseCallback />} />    {/* useCallback */}
            <Route path='update/:id' element={<UpdateUser />} />
            <Route path='update-task/:id' element={<UpdateTask />} />
            <Route path='CounterRedux' element={<CounterRedux />} />    {/* Redux */}
            <Route path='posts' element={<Posts />} />    {/* Redux */}
            <Route path='add-post' element={<AddPost />} />    {/* Redux */}
            <Route path='update-post/:postId' element={<UpdatePost />} />    {/* Redux */}
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;