import React,{useState} from 'react'

export default function TextForm(Props) {
    const handleUpClick = ()=>{
    //    console.log("Handle is clicked");
       let newText=Text.toUpperCase();
       setText(newText)
    }

    const handleDownClick =()=>{
        // console.log("Handle is clicked");
        let newText1=Text.toLowerCase();
        setText(newText1)
    }

    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }
    const removeSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [Text,setText] =useState(" ");
    return (
       <>
      <div className="container" style={{color:Props.mode==='dark'?'white':'#253b5c'}}>
       <marquee behavior="slide" scrollamount="30"> <h1 >{Props.heading}</h1></marquee>
        <div className="mb-3">
          <textarea className="form-control" value={Text} 
          style={{backgroundColor:Props.mode==='dark'?'grey':'white',color:Props.mode==='dark'?'white':'#253b5c'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}> Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove extra space</button>
      </div>
      <div className="container my-3" style={{color:Props.mode==='dark'?'white':'#253b5c'}}>
           <h2>Your summary</h2>
           <p>{Text.split(" ").length} words and {Text.length} characters</p>
           <p>{0.008*Text.split(" ").length} minutes read</p>
           <h2>Preview</h2>
           <p>{Text}</p>
      </div>
   </>
    );
}