import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Session32 from './Components/Session 32/Session32';
import Session33 from './Components/Session 33/Session33';
import Session34 from './Components/Session 34 + 35/Session34';
import Session36 from './Components/Session 36/Session36';
import Session37 from './Components/Session 37/Session37';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='session32' element={<Session32/>}/>
        <Route path='session33' element={<Session33/>}/>
        <Route path='session34' element={<Session34/>}/>
        <Route path='session36' element={<Session36/>}/>
        <Route path='session37' element={<Session37/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;