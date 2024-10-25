import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NotFound from './Components/NotFound';
import Session32 from './Components/Session 32/Session32';
import Session33 from './Components/Session 33/Session33';
import Session34 from './Components/Session 34 + 35/Session34';
import Session36 from './Components/Session 36/Session36';
import Session37 from './Components/Session 37/Session37';
import Session38 from './Components/Session 38/Session38';
import Session39 from './Components/Session 39/Session39';
import UpdateUser from './Components/Session 39/UpdateUser';
import Session40 from './Components/Session 40/Session40';
import Header from './Components/Session 40/Header';
import UpdateTask from './Components/Session 40/UpdateTask';
import Session41 from './Components/Session 41/Session41';
import Session42 from './Components/Session 42/Session42';
import Session43 from './Components/Session 43/Session43';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='test' element={<Session32 />} />         {/*Create component inside another component */}
        <Route path='session33' element={<Session33 />} />    {/* useState and Class Component */}
        <Route path='session34' element={<Session34 />} />    {/* ToDO List */}

        <Route path='session36' element={<Header />}>
          <Route path='' element={<Session36 />} />           {/* Add User & View Users */}
          <Route path='session40' element={<Session40 />} />  {/* Add Task & View Tasks */}
        </Route>
        <Route path='session37' element={<Session37 />} />
        <Route path='session38' element={<Session38 />} />    {/* useCallback */}
        <Route path='session39' element={<Session39 />} />
        <Route path='update/:id' element={<UpdateUser />} />
        <Route path='update-task/:id' element={<UpdateTask />} />
        <Route path='session41' element={<Session41 />} />    {/* Redux */}
        <Route path='session42' element={<Session42 />} />
        <Route path='session43' element={<Session43 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;