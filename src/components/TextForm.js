import React, {useState} from 'react'
import { copy } from 'clipboard'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    const handleClClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    const handleCoClick = ()=>{
        copy(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.btn} mx-3`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.btn} mx-3`} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.btn} mx-3`} onClick={handleClClick}>Clear Text</button>
        <button className={`btn btn-${props.btn} mx-3`} onClick={handleCoClick}>Copy Text</button>
        <button className={`btn btn-${props.btn} mx-3`} onClick={handleExtraSpaces}>Remove Extra Spaces Text</button>


    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 *  text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here!"}</p>
    </div>
    </>
  )
}
