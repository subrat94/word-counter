import React, {useState} from 'react'

export default function Above(props) {

// const [mystyle, setMystyle] = useState( {
//     color:'black',
//     backgroundColor:'white'
    
// })
let mystyle ={
    color:props.mode=== 'dark'?'white':'#281111',
    backgroundColor:props.mode=== 'dark'?'rgb(36 74 104)':'white'
}

    return (
        <div className='container' style={{color:props.mode=== 'dark'?'white':'#281111',}}>
            
            <h1>About us</h1>
            <div className="accordion"    style={mystyle} id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            this text give you to analyze uour knowledge
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={mystyle}  aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            textutils is a free text counter tool that provide instant word counter and character count for a given text.it also give the umber of word and charecter.thus it is suitable to writing text with wod/charrecter limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            browse compatable
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"  style={mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           This word counter software works really good in every browser such as chrome,firefox,internet Explorer, safari,opera .it suits to count charecter in facebook ,blog,books, excel documents etc.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
