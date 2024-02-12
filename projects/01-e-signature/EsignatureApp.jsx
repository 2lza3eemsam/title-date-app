import React, { useState} from 'react'
import Title from './components/Title'

export default function EsignatureApp() {
    const [name, setName] = useState("Your Signature");
    const [date, setDate] = useState("Select Date");
    const handleNameChange = (e)=> {
     //   console.log(e.target.value);
     setName(e.target.value);
    }

    const handleDateChange = (e)=> {
        //   console.log(e.target.value);
        setDate(e.target.value);
       }
    const inputStyle={
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0",
    };
    document.body.style.background = "#eee";
  return (
    <div className='container text-center'>
      <Title classes={"title"} text={name} />
      <Title classes={"main-title mb-4"} text={!date ?  "DOB": date} />
      <p>This is an eSignature app that allows you to sign your name with the date</p>
      <footer className='d-flex' style={{"justifyContent": "space-around", position: "relative", top: "40vh"}}>
      <input type="date" value={date} style={inputStyle} onChange={handleDateChange}/>
      <input type="text" value={name} style={inputStyle} onChange={handleNameChange}/>
      </footer>
    </div>
  )
}
