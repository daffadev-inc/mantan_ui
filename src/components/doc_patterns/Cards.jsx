import React from 'react'
import CodeDemo from '../CodeDemo'

export default function Cards() {
    
    const textCardCode = 
    `<div class="displayGrid md:gridCols3 mb4">

        <!-- card below -->
        <div class="bgWhite textGray5 border borderGray2 rounded shadowMdGray2 p4">
            <small class="textXs textGray1 p1 rounded bgBlue4">Word of the day</small>
            <h3 class="fontSemiBold textLg mt2 mb2">Mantan Terindah</h3>
            <small class="textGray4">
                <span class="mr2">Lorem Ipsum</span>
                <span class="">Dollor siamet</span>
            </small>
            <p class="textSm mt2 mb2">
                the occurrence and development of events by chance in a happy or beneficial way. <br>
                <em>"a fortunate stroke of serendipity"</em>
            </p>
            <div class="textXs textGray4 mb4">
                Synonyms: <span class="textSm textBlue4">happy chance, fortuity, providence, fluke, luck</span>
            </div>
            <div class="">
                <a href="javascript:void(0);" class="textBlue5 hover:textBlue4 textSm fontBold">LEARN MORE <i class="fas fa-angle-right"></i></a>
            </div>
        </div>
    
    </div>
    `;
    
    const imageCardCode = 
    `<div class="displayGrid gap1 md:gridCols2 mb4">
        
        <!-- actual card 1 below -->
        <div class="bgWhite textGray5 border borderGray3 rounded overHide shadowSmGray2">
            <div class="user-post bgGray1 p2">
                <img src="./mantanQ.png" alt="user post image" class="fitCover rounded">
            </div>
            <div class="user-actions displayFlex justifyFlexEnd itemsCenter p2">
                <div>
                    <i class="fas fa-heart textRed4 textMd mr2"></i>
                    <i class="far fa-comment textGray4 textMd mr2"></i>
                    <i class="fas fa-share textGray4 textMd"></i>
                </div>
            </div>
            <div class="user-info displayFlex p2 itemsCenter justifyBetween">
            <div class="displayFlex itemsCenter">
                <img src="./logo.svg" class="w12 h12 roundedFull border borderGray3" alt="User Image">
                <div class="ml2 p1">
                    <strong class="displayBlock textSm">Mantan Terindah</strong>
                    <small class="textGray4">Regional Bandung</small>
                </div>
				</div>
                <i class="fas fa-ellipsis-v textGray4 textMd"></i>
            </div>
        </div>
        <!-- end card 1 -->

        <!-- actual card 2 below -->
        <div class="bgWhite textGray5 border borderGray3 rounded overHide shadowSmGray2">
        <div class="user-info displayFlex p2 itemsCenter justifyBetween">
        <div class="displayFlex itemsCenter">
            <img src="./logo.svg" class="w12 h12 roundedFull border borderGray3" alt="User Image">
            <div class="ml2 p1">
                <strong class="displayBlock textSm">Mantan Terindah</strong>
                <small class="textGray4">Regional Bandung</small>
            </div>
            </div>
            <i class="fas fa-ellipsis-v textGray4 textMd"></i>
        </div>
            <div class="user-post bgGray1 p2">
                <img src="./mantanQ.png" alt="user post image" class="fitCover rounded">
            </div>
            <div class="user-actions displayFlex justifyFlexEnd itemsCenter p2">
                <div>
                    <i class="fas fa-heart textRed4 textMd mr2"></i>
                    <i class="far fa-comment textGray4 textMd mr2"></i>
                    <i class="fas fa-share textGray4 textMd"></i>
                </div>
            </div>
        </div>
        <!-- end card 2 -->
        
    </div>
    `;

    const horizontalCardCode = 
    `<div class="displayGrid md:gridCols2 mb4">
        <div class="displayGrid gridCols6 bgWhite textGray5 border borderGray3 rounded shadowSmGray2">
            <img class="gridColSpan2 fitCover" src="./4120826584.jpeg" alt="User Image">
            <div class="user-info gridColSpan4 displayFlex flexCol p1">
                <div class="p1 flexGrow">
                    <strong class="displayBlock textSm mb1">Mantan ( the Movie )</strong>
                    <small class="displayBlock textGray4 mb1">
                        <i class="fas fa-user-astronaut textXs"></i>
                        Luna Maya, Kimberly Ryder, Karina Nabila
                    </small>
                    <small class="displayBlock textGray4 mb1">
                        <i class="fas fa-record-vinyl textXs"></i> Drama
                    </small>
                </div>
                <div class="pt2 pb2 pr2 textRight">
                    <button class="bgPurple5 hover:bgPurple6 border borderPurple5 textGray1 p2 roundedFull">
                        <i class="fas fa-play ml1"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="inputSection textGray4">
                <h2 className="textXl textGray5 mb2">Cards</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb8">
                Card banyak digunakan di web. Kemungkinan Anda memerlukan setidaknya dua varian - Card vertikal dan horizontal di situs Anda.
                </p>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Text only card</h4>
                {/* <p className="mb4">Wrap your input and label insida a parent div and give it a class of <span className="bgGray1 p1">displayFlex</span> & <span className="bgGray1 p1">flexCol</span>. This will stack the child elements vertically.</p> */}
                <CodeDemo code={textCardCode} codeTitle={'Text only card with link'} codeActions={true}/>
            </div>
            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Card with image</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={imageCardCode} codeTitle={'Card with image and buttons'} codeActions={true}/>
            </div>

            <div className=" mb12 textGray5">
                <h4 className="mb1 fontSemiBold">Horizontal Card</h4>
                {/* <p className="">To turn images into a circle, you need image of equal height and width. Give it a class <span className="bgGray1 p1">roundedFull</span></p> */}
                <CodeDemo code={horizontalCardCode} codeTitle={'Horizontal card'} codeActions={true}/>
            </div>
            
        </div>
    )
}
