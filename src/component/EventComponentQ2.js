import { useState } from "react"



const EventComponentQ2 = () => {
//실습

let [form, setForm] = useState({data : '', result : '' })

const handleChange = (e) => {
  //e.target <===== tag
  setForm({data: e.target.value, result:''})

}

const handleClick = () => {
 
  setForm({data:'',result : form.data})

}



return(
  <div >
    <h1>인풋데이터 핸들링(실습)</h1>
    <h3>클릭시 데이터는 공백으로 결과는 인폿이 입력한 값으로 처리</h3>
    <pre>힌트는? 아마도 state는 두개가 필요할듯?</pre>

    <input type="text" onChange={handleChange} value={form.data}/>
    <button type="button" onClick={handleClick}>추가하기</button>
    <h3>결과</h3>
    <p>{form.result} </p>

  </div>
)


};


export default EventComponentQ2;