
import React, { useState } from 'react'


export default function Textform(props) {
    const hadleupclick = () => {
        // console.log("upper case has clicked" + text);
        let newtext = text.toUpperCase()
        setText(newtext);
        props.showAlert(" enable upper case","success")
    }
    const hadlelowclick = () => {
        console.log("lower case has clicked" + text);
        let newtext = text.toLowerCase()
        setText(newtext);
        props.showAlert("enable lower case","success")
    }
    const handleonchange = (event) => {
        console.log("handleonchange");
        setText(event.target.value)

    }
    const hadleextraspace = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("remove spaces","success");
    

    }
    const cleartext = () => {
        let newtext = ""
        setText(newtext)

    }

    const [text, setText] = useState('enter your text');
    // text="change the text"  //this is the wrong way to update text
    // setText("this is your new text")
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'cyan' : 'black' }}>

                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? '#0a2744' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={hadleupclick}>convert to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={hadlelowclick}>convert to lower case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={hadleextraspace}>remove extra space</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={cleartext}>clear text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'cyan' : 'black' }} >
                <h1>start your counting</h1>
                <p>i have {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letter</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} take time to read </p>
                <h2>previw</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
