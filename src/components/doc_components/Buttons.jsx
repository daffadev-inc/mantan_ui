import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Buttons() {
    
    const primaryBtn = 
    `<button class="textWhite bgBlue4 border borderBlue4 hover:bgBlue5 shadowBlue rounded pl4 pr4 pt2 pb2">Primary Button</button>`;

    const dangerBtn =
    `<button class="textWhite bgRed4 border borderRed4 hover:bgRed5 shadowRed rounded pl4 pr4 pt2 pb2">Danger Button</button>`
    
    const successBtn = 
    `<button class="textWhite bgGreen4 border borderGreen4 hover:bgGreen5 rounded shadowGreen pl4 pr4 pt2 pb2">Success Button</button>`
    
    const warningBtn =
    `<button class="textGray6 bgYellow3 border borderYellow3 hover:bgYellow4 shadowYellow hover:textWhite rounded pl4 pr4 pt2 pb2">Warning Button</button>`
    
    const borderBtn = 
    `<button class="textBlue5 bgTransparent border borderBlue5 hover:bgBlue5 hover:textWhite hover:shadowBlue rounded pl4 pr4 pt2 pb2">Border only Button</button>`
    
    const iconBtn =
    `<button class="textWhite bgPurple4 border borderPurple5 hover:bgPurple5 hover:shadowPurple rounded pl4 pr4 pt2 pb2">
        <i class="fas fa-download"></i> Icon Button
    </button>`
    
    const otherBtn = 
    `<div class="displayGrid gridCols1 md:gridCols3 gridGap8 mb4">
        <div class="mb2">
            
            <!-- Floating button -->
            <button class="bgTeal5 border borderGreen4 hover:bgTeal6 roundedFull displayFlex justifyCenter itemsCenter p2">
                <i class="fas fa-plus textGreen1 textSm"></i>
            </button>
        
        </div>

        <div className="mb2">
            
            <!-- Small button -->
            <button class="textXs textGray6 bgGray2 border borderGray3 hover:bgGray3 hover:shadowGray rounded pl2 pr2 pt1 pb1">Small Button</button>
        
        </div>

        <div class="mb2">
        
            <!-- Block button -->
            <button class="displayBlock wFull pt2 pb2 textWhite bgPurple4 border borderPurple6 hover:bgPurple5 hover:shadowPurple rounded">Block Button</button>
        
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="alertSection textGray4">
                <h2 className="textXl textGray5 mb2">Buttons</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                Sebuah tombol memicu suatu peristiwa atau tindakan. Mereka memberi tahu pengguna apa yang akan terjadi selanjutnya. Mereka biasanya digunakan sebagai bagian dari komponen atau pola yang lebih besar seperti dialog form atau modal.
                </p>
            </div>

            <div className="">
                {/* <h4 className="mb1 fontSemiBold">Buttons</h4> */}
                <p className="mb8">
                    Buttons
                    <ul className="pl6 textGray4">
                        <li className="">
                        memindahkan pengguna melalui urutan layar
                        </li>
                        <li className="">
                        bertindak sebagai calls to action (CTAs)
                        </li>
                        <li className="">
                        dengan ikon untuk menyampaikan makna lebih cepat
                        </li>
                        <li className="">
                        dengan lencana menunjukkan nilai
                        </li>
                    </ul>
                </p>
                
            </div>
            
            <div className="mb8">
                <CodeDemo code={primaryBtn} codeTitle={'Primary Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={dangerBtn} codeTitle={'Danger Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={successBtn} codeTitle={'Success Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={warningBtn} codeTitle={'Warning Button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={borderBtn} codeTitle={'Border only button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={iconBtn} codeTitle={'Icon in button'} codeActions={true}/>
            </div>
            <div className="mb8">
                <CodeDemo code={otherBtn} codeTitle={'Other buttons'} codeActions={true}/>
            </div>
        </div>
    )
}
