import React, { useContext, useState } from 'react'
import { AppContext } from '../App'

const Subchild11 = () => {

  const context = useContext(AppContext)
  const [shownText, setShownText] = useState(false)
  console.log(context);

  const showTextHandler = () => {
    setShownText(!shownText)
    console.log('sub11');
  }

  return (
    <div>
      <p>Subchild11</p>
      <button onClick={showTextHandler}>Show text from subchild22</button>
      {shownText && <p>{context.subChildText}</p>}
    </div>

  )
}

export default Subchild11