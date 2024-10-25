import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../lib/store"
import { changeQuantity, removeFromCart } from "../lib/slices/cartSlice"
import CheckOutModal from "../components/CheckOutModal"

export default function Cart() {

  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.reducers.cart)

  return (
    <div>
      {
        cart.length === 0 ?
          <div className="flex justify-center items-center" style={{ minHeight: '70vh' }}>Nothing to show here</div>
          :
          <div className="flex flex-col items-center gap-10">
            <div className="flex justify-center my-5 font-bold text-center" style={{ width: '70vw' }}>
              <div style={{ width: '20vw' }}>Picture</div>
              <div style={{ width: '20vw' }}>Name</div>
              <div style={{ width: '20vw' }}>Quantity</div>
              <div style={{ width: '20vw' }}>Price</div>
              <div style={{ width: '5vw' }}></div>
            </div>

            <div className="flex flex-col items-center gap-10">
              {cart.map((product, index) => {
                return <div key={index} className="flex justify-center items-center text-center bg-white rounded-2xl p-2" style={{ width: '70vw' }}>
                  <div className="flex justify-center" style={{ width: '20vw' }}>
                    <img src={product.image} alt={product.title} style={{ width: '150px' }} />
                  </div>
                  <div style={{ width: '20vw' }}>{product.title}</div>
                  <div style={{ width: '20vw' }} className="flex justify-evenly items-center">
                    <span>
                      <svg className="cursor-pointer" onClick={() => dispatch(changeQuantity({ id: product.id, quantity: -1 }))} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><path fill="url(#f1360id0)" d="M2.195 16.002c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.255c-1.68 0-3.06-1.38-3.06-3.06"></path><path fill="url(#f1360id1)" d="M2.195 16.002c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.255c-1.68 0-3.06-1.38-3.06-3.06"></path><path fill="url(#f1360id2)" d="M2.195 16.002c0-1.69 1.38-3.06 3.06-3.06h21.85c1.69 0 3.06 1.38 3.06 3.06c0 1.69-1.38 3.06-3.06 3.06H5.255c-1.68 0-3.06-1.38-3.06-3.06"></path><g filter="url(#f1360id3)"><path fill="#544c5d" d="M5.441 14.487h23.366v2.276H5.441z"></path></g><defs><linearGradient id="f1360id0" x1={16.18} x2={16.18} y1={12.941} y2={19.061} gradientUnits="userSpaceOnUse"><stop stopColor="#4a4253"></stop><stop offset={1} stopColor="#39204e"></stop></linearGradient><linearGradient id="f1360id1" x1={2.195} x2={5.441} y1={16.002} y2={16.002} gradientUnits="userSpaceOnUse"><stop offset={0.314} stopColor="#342d3c"></stop><stop offset={1} stopColor="#342d3c" stopOpacity={0}></stop></linearGradient><radialGradient id="f1360id2" cx={0} cy={0} r={1} gradientTransform="matrix(-3.33793 0 0 -3.68387 29.768 14.942)" gradientUnits="userSpaceOnUse"><stop stopColor="#6c6673"></stop><stop offset={1} stopColor="#6c6673" stopOpacity={0}></stop></radialGradient><filter id="f1360id3" width={26.366} height={5.276} x={3.941} y={12.987} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_18590_1731" stdDeviation={0.75}></feGaussianBlur></filter></defs></g></svg>
                    </span>
                    {product.quantity}
                    <span>
                      <svg className="cursor-pointer" onClick={() => dispatch(changeQuantity({ id: product.id, quantity: 1 }))} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f1965id2)"><path fill="url(#f1965id0)" d="M19.245 4.825c0-1.68-1.37-3.06-3.06-3.06s-3.07 1.38-3.06 3.06v7.12a.75.75 0 0 1-.75.75h-7.12c-1.68 0-3.06 1.37-3.06 3.06c0 1.68 1.38 3.06 3.06 3.06h7.12a.75.75 0 0 1 .75.75v7.11c0 1.68 1.37 3.06 3.06 3.06c1.68 0 3.06-1.37 3.06-3.06v-7.11a.75.75 0 0 1 .75-.75h7.11c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06h-7.11a.75.75 0 0 1-.75-.75z"></path></g><g filter="url(#f1965id3)"><path fill="url(#f1965id1)" d="M16.778 3.375c-.744 0-1.348.603-1.348 1.347v8.24a1 1 0 0 1-1 1H5.75a1.347 1.347 0 0 0 0 2.694h8.68a1 1 0 0 1 1 1v9.122a1.347 1.347 0 1 0 2.695 0v-9.122a1 1 0 0 1 1-1h8.68a1.347 1.347 0 1 0 0-2.694h-8.68a1 1 0 0 1-1-1v-8.24c0-.744-.603-1.347-1.347-1.347"></path><path fill="url(#f1965id4)" d="M16.778 3.375c-.744 0-1.348.603-1.348 1.347v8.24a1 1 0 0 1-1 1H5.75a1.347 1.347 0 0 0 0 2.694h8.68a1 1 0 0 1 1 1v9.122a1.347 1.347 0 1 0 2.695 0v-9.122a1 1 0 0 1 1-1h8.68a1.347 1.347 0 1 0 0-2.694h-8.68a1 1 0 0 1-1-1v-8.24c0-.744-.603-1.347-1.347-1.347"></path></g><defs><linearGradient id="f1965id0" x1={16.18} x2={16.18} y1={1.765} y2={29.735} gradientUnits="userSpaceOnUse"><stop stopColor="#5d4c6e"></stop><stop offset={0.851} stopColor="#332c3c"></stop></linearGradient><linearGradient id="f1965id1" x1={19.875} x2={19.875} y1={27.063} y2={6.875} gradientUnits="userSpaceOnUse"><stop stopColor="#4d4655"></stop><stop offset={1} stopColor="#4d4655" stopOpacity={0}></stop></linearGradient><filter id="f1965id2" width={29.47} height={29.47} x={2.195} y={0.265} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dx={2}></feOffset><feGaussianBlur stdDeviation={0.75}></feGaussianBlur><feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.168627 0 0 0 0 0.156863 0 0 0 0 0.188235 0 0 0 1 0"></feColorMatrix><feBlend in2="shape" result="effect1_innerShadow_18590_1721"></feBlend><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix><feOffset dy={-2}></feOffset><feGaussianBlur stdDeviation={0.75}></feGaussianBlur><feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic"></feComposite><feColorMatrix values="0 0 0 0 0.215686 0 0 0 0 0.117647 0 0 0 0 0.294118 0 0 0 1 0"></feColorMatrix><feBlend in2="effect1_innerShadow_18590_1721" result="effect2_innerShadow_18590_1721"></feBlend></filter><filter id="f1965id3" width={27.75} height={27.75} x={2.903} y={1.875} colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity={0} result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_18590_1721" stdDeviation={0.75}></feGaussianBlur></filter><radialGradient id="f1965id4" cx={0} cy={0} r={1} gradientTransform="matrix(-6.99995 9.62506 -10.46121 -7.60805 24.438 7.5)" gradientUnits="userSpaceOnUse"><stop offset={0.298} stopColor="#6d607c"></stop><stop offset={1} stopColor="#6d607c" stopOpacity={0}></stop></radialGradient></defs></g></svg>
                    </span>
                  </div>
                  <div style={{ width: '20vw' }}>{product.price} $</div>
                  <div style={{ width: '5vw' }}>
                    <svg className="cursor-pointer" onClick={() => dispatch(removeFromCart(product.id))} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#d20000" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path></svg>
                  </div>
                </div>
              })}
            </div>
            <CheckOutModal />
          </div>
      }

    </div>
  )
}
