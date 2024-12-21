import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("")

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success");
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const valueChange = (e) => {
        setText(e.target.value);
        console.log(text);
    }

    return (
        <>
            <div className='container mb-3' style={{color: props.mode==='light'?'black':'white'}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={valueChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpperCase} >Convert to UpperCase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLowerCase} >Convert to LowerCase</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy} >Copy Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClearText} >Clear Text</button>
                <button type="button" disabled={text.length===0} className="btn btn-primary m-1" onClick={handleExtraSpaces} >Remove extra spaces</button>
            </div>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h3>Your text summary</h3>
                <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
                <p>{0.08 * text.split(' ').filter((e)=>{return e.length!==0}).length} minutes read</p>
                <h3>Preview</h3>
                <pre>{text!==''?(text):("Enter some text above to preview")}</pre>
            </div>
        </>
    )
}
