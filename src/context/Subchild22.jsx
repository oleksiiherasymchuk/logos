import React, { useContext } from 'react'
import { AppContext } from '../App';

const Subchild22 = () => {
  const context = useContext(AppContext);
  // console.log(context);

  const changeTextHandler = () => {
    context.setSubChildText(() => {
      const newText = 'text from subchild 22 to subchild11'
      return newText
    })
  }

  return (
    <div>
      <h3>SubChild2_2</h3>
      <button onClick={changeTextHandler}>Send Data to SubChild1_1</button>
    </div>
  );
}

export default Subchild22