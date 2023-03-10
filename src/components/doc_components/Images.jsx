import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Images() {
    
    const responsiveImageCode = 
    `<div class="displayGrid gridCols1 md:gridCols3 mb4">
        <div class="demo-card border borderGray3 overHide rounded">
            <!-- below image is responsive -->
            <img src="https://picsum.photos/id/237/800/600" class="fitCover" alt="Responsive Image">
            <h4 class="p2 mt1 mb1">Responsive image</h4>
            <p class="p2 textSm">Large Image 800x600 fitted in card</p>
        </div>
     </div>`;
    
    const roundImageCode = 
    `<div class="displayGrid gridCols3 mb4">
        <div class="demo-card">
            <img src="https://picsum.photos/id/237/400/400" class="roundedFull w24" alt="Responsive Image">
        </div>
    </div>
    `;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="alertSection textGray4">
                <h2 className="textXl textGray5 mb2">Images</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                Gambar digunakan dalam kartu sebagian besar di mana mereka menjangkau seluruh lebar induk dan responsif.
                </p>
            </div>

            <div className="success-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Responsive Image</h4>
                <p className="mb4">Untuk membuat gambar responsif berikan class <span className="bgGray1 p1">wFull atau fitCover</span>, sehingga akan mengambil lebar induk penuh.</p>
                <CodeDemo code={responsiveImageCode} codeTitle={'Responsive Image'} codeActions={true}/>
            </div>
            <div className="failure-alert mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Round Image</h4>
                <p className="">Untuk mengubah gambar menjadi lingkaran, Anda membutuhkan gambar dengan tinggi dan lebar yang sama. Berikan class <span className="bgGray1 p1">roundedFull</span></p>
                <CodeDemo code={roundImageCode} codeTitle={'Round Image'} codeActions={true}/>
            </div>
            
        </div>
    )
}
