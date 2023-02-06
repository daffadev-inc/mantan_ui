import React from 'react'
import CodeDemo from '../CodeDemo'

export default function Intro() {

    const importCss = `<link rel="stylesheet" href="https://mantan-ui.mvstream.workers.dev/css/mantan_ui.css" />`;
    const featureCard = 
    `<div class="displayFlex p2 bgWhite rounded border borderGray2 shadowMdGray2">
        <img src="./mantan.png" class="w24 roundedFull mr3" alt="user"/>
        <div class="displayFlex flexCol">
            <p class='fontBold lineHeightMd'>Mantan UI</p>
            <small class='mb1 fontSemiBold'>Css Framework</small>
            <em class="mb2 textXs textGray5">Inspiration: TailwindCss</em>
            <small class=''>Email: namamu@email.com</small>
        </div>
    </div>`;

    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="intro textGray4">
                <h1 className="textXl textGray5 mb4">Perkenalan</h1>
                <h2 className="textMd fontSemiBold lineHeightLg mb4">
                <b className="textBlue4">Mantan_UI,</b> Framework CSS yang terinspirasi dari <a href="https://tailwindcss.com/" target='_blank' rel="noreferrer noopener" className="textBlue4">TailwindCSS</a> 
                    &nbsp;memungkinkan anda membuat situs web dengan cepat tanpa meninggalkan HTML.
                </h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                    <b className="textBlue4">Mantan_UI</b> adalah framework CSS First-Utility yang dikemas dengan class-class seperti <span className=" lineHeightMd fontSemiBold">displayFlex, pt4, textCenter, gridColSpan6</span> dll yang dapat disusun untuk membuat desain apa pun, langsung di markup anda. Bahkan dengan palet warna dan skala ukuran yang sama, mudah untuk membuat komponen yang sama dengan tampilan yang sama sekali berbeda di project berikutnya.<br/>
					Meskipun belum sepenuhnya selesai, framework CSS <b className="textBlue4">Mantan_UI</b> ini sudah dapat digunakan.
                </p>
            </div>
            <div className="installation mt8 md:mt12 mb4">
                <h3 className="textLg fontSemiBold mb2">Installasi</h3>
                <small className="textRg textGray4">Cara mengaktifkan dan menjalankan Mantan_UI di project website anda.</small>

                <p className="mt4 mb4">anda dapat langsung mengimpor file css di html anda menggunakan tautan tag HEAD berikut.</p>

                <CodeDemo code={importCss} codeTitle={'Menambahkan mantan_ui.css'} codeActions={false}/>

                <p className="note p2 border borderOrange3 bgOrange1 textOrange6 rounded mt4 mb4">
                    <i className="fas fa-exclamation-circle mr1"></i>
                    <strong>Note:</strong> Import style css anda sendiri setelah anda mengimpor mantan_ui, jadi saat anda mau, anda dapat mengganti class mantan-ui.
                </p>
            </div>

            <div className="how-it-works mt8 md:mt12 mb4">
                <h3 className="textLg fontSemiBold mb2">Konsep Core</h3>
                <small className="textRg textGray4">Pelajari cara kerja utitlity first css.</small>

                <p className="mt4 mb4 textRg lineHeightMd fontNormal textGray5 mb4">
                    Dengan Mantan_UI, anda menata elemen dengan menerapkan class yang sudah ada sebelumnya langsung di HTML anda. <br/>
                    Pendekatan ini memungkinkan kami menerapkan desain komponen yang sepenuhnya disesuaikan tanpa menulis satu baris pun CSS khusus. <br/>
                    Selain itu memelihara proyek CSS yang mengutamakan utilitas ternyata jauh lebih mudah daripada memelihara basis kode CSS yang besar, hanya karena HTML jauh lebih mudah dipelihara daripada CSS.
                </p>
                <p className='fontMedium textGray5'>Mantan_UI mengikuti camelCase untuk menamai class nya.</p>
                <p className="mt4 mb2 textRg lineHeightMd fontNormal textGray5 mb4">
                    Mari kita lihat cara kerjanya, perhatikan contoh kartu berikut.
                </p>

                <div className="feature-preview displayGrid gridCols6 justifyCenter p4 bgGray1 border borderGray3 rounded">
                    <div className="gridCols1"></div>
                    {/* actual div */}
                    <div className="displayFlex p2 bgWhite rounded border borderGray2 shadowMdGray2 gridColSpan6 md:gridColSpan4">
                        <img src="./mantan.png" className="w24 roundedFull mr3 border borderGray2" alt="user"/>
                        <div className="displayFlex flexCol">
                            <p className='fontBold lineHeightMd'>Mantan UI</p>
                            <small className='mb1 fontSemiBold'>Css Framework</small>
                            <em className="mb2 textXs textGray5">Inspiration: TailwindCss</em>
                            <small className=''>Email: namamu@email.com</small>
                        </div>
                    </div>
                </div>
                <CodeDemo code={featureCard} codeTitle={'Kartu informasi pengguna'} codeActions={false}/>
                <div className="feature-explaination">
                    Dalam contoh di atas kami telah menggunakan:
                    <ul className='listNoStyle mt2 mb2'>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>flexbox</strong> dan <strong className='fontSemiBold'>padding</strong> utilities ('<span className='textGreen5'>displayFlex</span>' dan '<span className='textGreen5'>p2</span>') untuk mengontrol tata letak kartu.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>border</strong>, <strong className='fontSemiBold'>background-color</strong> dan <strong className='fontSemiBold'>shadow</strong> utilities ('<span className='textGreen5'>border, borderGray2, rounded</span>', '<span className='textGreen5'>bgWhite</span>' dan '<span className='textGreen5'>shadowMdGray2</span>') untuk mengontrol tampilan kartu.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>width</strong>, <strong className='fontSemiBold'>border-radius</strong> dan <strong className='fontSemiBold'>margin</strong> utilities ('<span className='textGreen5'>w24</span>', '<span className='textGreen5'>roundedFull</span>' dan '<span className='textGreen5'>mr3</span>') untuk memberi lebar pada gambar, buat bulat dan beri margin kanan.
                            </p>
                        </li>
                        <li className="displayFlex mb2">
                            <i className="fas fa-angle-right mr2 pt1"></i>
                            <p className="">
                                <strong className='fontSemiBold'>text</strong> dan <strong className='fontSemiBold'>font</strong> utilities ('<span className='textGreen5'>textXs, textGray5</span>' dan '<span className='textGreen5'>fontBold, fontSemiBold</span>') untuk mengontrol ukuran font, warna teks dan font-weight teks.
                            </p>
                        </li>
                    </ul>
                </div>

                <div className="mt8 mb12">
                    <h4 className="mt2 mb2 textGray5">Kekhawatiran?</h4>
                    <p className="concerns textRg lineHeightMd fontNormal textGray5 mb4">
                        Kekhawatiran pemeliharaan terbesar saat menggunakan pendekatan first-utility adalah mengelola kombinasi utilitas yang sering diulang.<br/>
                        Ini mudah dipecahkan dengan mengekstraksi komponen, biasanya sebagai sebagian atau komponen template. 
                    </p>
                </div>
                
            </div>
        </div>
    )
}
