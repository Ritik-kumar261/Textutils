import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was disabled={text.length===0} clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case" , "success");
    }
    const handloClick=()=>{
      // console.log("Uppercase was disabled={text.length===0} clicked"+ text);
      let newText=text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case", "success");
  }
  const handleClearClick=()=>{
    let newText=' ';
    setText(newText)
    props.showAlert("All text are disabled={text.length===0} clear" , "success");

  }
  const handleCopy=()=>{
    let text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "))
  }
    const handleOnChange=(event)=>{
      // console.log("on change");
      setText(event.target.value)
  }
    const [text, setText] = useState('');
    
  return (
    <>
    <div disabled={text.length===0} className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading} </h1>
        <div  className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handloClick}>convert to lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces }>space</button>
    </div>
    <div disabled={text.length===0} className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summery</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length}character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read</p>
      <h2>Preview</h2>
      <p>{text.length>0? text:"Enter something in the text box above to preview it here"}</p>
    </div>
    </>
  )
}
