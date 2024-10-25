import React from "react"

function Button({onClick}) {

  console.log('from Button Component')

  return (
    <button onClick={onClick}>+</button>
  )
}

export default React.memo(Button)