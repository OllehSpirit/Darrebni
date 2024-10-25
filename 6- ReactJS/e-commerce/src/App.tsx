import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Products from "./pages/products/Products"
import Cart from './pages/Cart'
import AddProduct from './pages/products/AddProduct'
import EditProduct from './pages/products/EditProduct'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Header />} >
          <Route path='' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='add-product' element={<AddProduct />} />
          <Route path=':productId' element={<EditProduct />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
