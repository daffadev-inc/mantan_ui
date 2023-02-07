import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Modals() {
    
    const modalCssOnly = 
    `<div class="interior mb8 mt8">
        <a class="textWhite bgBlue4 border borderBlue4 hover:bgBlue5 shadowBlue rounded pl4 pr4 pt2 pb2" href="#modalOpen">Basic Modal</a>
     </div>
    <div id="modalOpen" class="modalWindow">
        <div>
            <a href="#" title="Close" class="modalClose">Close</a>
                <h1>Hallo!</h1>
            <div>
            Modals CSS-only berdasarkan :target pseudo-class. Semoga bisa membantu project anda.
            </div>
            Your new favorite eyedropper tool!
        </div>
    </div>`;

return (
    <div className="p4 md:pl8 md:pr8">
        <div className="inputSection textGray4">
            <h2 className="textXl textGray5 mb2">Modal</h2>
            <p className="textRg lineHeightLg fontNormal textGray5 mb8">
            Modal telah banyak digunakan di web. modal ini tidak memakai javascript seperti kebanyakan modal lain nya.
            </p>
        </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Modal CSS only</h4>
                <CodeDemo code={modalCssOnly} codeTitle={'Modal CSS only'} codeActions={true}/>
            </div>
            
        </div>
    )
}
