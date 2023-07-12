
import { useState } from "react"

const EventComponentQ=() => {
  const[choice, setChoice] = useState('메뉴를 선택하세요');
  
  const handleFood = (event) => {
    setChoice(event.target.value)
  }

  return(
    <div >
      <select name="" id="" onChange={handleFood}>
        <option>햄버거</option>
        <option>피자</option>
        <option>치킨</option>              
      </select>
      <h2>선택한 결과</h2>
      <pre>{choice}</pre>      
    </div>
  )
};

export default EventComponentQ;



