import { useContext, useEffect, useRef } from "react"
import { data } from "../../store/Context"

export default function Task() {

  const dataFROMCONTEXT =useContext(data)

  const name = useRef()

  useEffect(() => {
    name.current.style.color = 'red'
  }, [])

  return (
    <>
      <div>Hello my name is <span ref={name}>{dataFROMCONTEXT}</span> </div>
    </>
  )
}
