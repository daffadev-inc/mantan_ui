import React from 'react'
import CodeDemo from '../CodeDemo'


export default function Avatars() {
    
    const avatarCode = 
    `<div class="displayGrid gridCols2 md:gridCols4 gridGap8 itemsCenter mb4">
        
        <!-- avatar 01 image only -->
        <img src="https://avatars.dicebear.com/api/bottts/x3.svg" class="h20 w20 roundedFull border borderGray4 mr4 p2" alt="">
        
        <!-- avatar 02 using Text -->
        <div class="h20 w20 roundedFull bgPurple5 textLg border borderGray2 displayFlex justifyCenter itemsCenter mr4">AR</div>
        
        <!-- avatar 03 image inside anchor tag -->
        <a href="" class="h20 w20 roundedFull bgBlue4 mr4">
            <img class="wFull roundedFull shadowMdGray5 border borderGray2" src="https://static.wikia.nocookie.net/amazing-movietv-kisses/images/4/45/Stark.jpg" alt="avatar image">
        </a>

        <!-- avatar 04 -->
        <div class="w20 h20">
            <img src="https://avatars.dicebear.com/api/bottts/x34.svg" class="wFull border borderGray2 p2" alt="">
        </div>

    </div>`;
    
    return (
        <div className="p4 md:pl8 md:pr8">
            <div className="avatarSection textGray4">
                <h2 className="textXl textGray5 mb4">Avatars</h2>
                <p className="textRg lineHeightLg fontNormal textGray5 mb4">
                Avatar bertindak sebagai proxy untuk pengguna atau entitas (seperti proyek, repositori, atau ruang), dalam suatu produk. Mereka sering digabungkan dengan indikator status atau kehadiran untuk memberikan lebih banyak konteks. Pengguna umumnya mengunggah gambar mereka sendiri, jika tidak, gambar default akan ditampilkan.
                </p>
            </div>

            <CodeDemo code={avatarCode} codeTitle={'Avatar examples'} codeActions={true}/>
            
            <p className="note p2 border borderBlue3 bgBlue1 textBlue6 rounded lineHeightMd mt8 mb4">
                <i className="far fa-lightbulb textSm mr1"></i>
                <strong>Tip: </strong> Ini hanyalah pedoman untuk avatar, jika Anda mau, Anda dapat mengubah ukuran, bentuk, warna avatar Anda menggunakan berbagai kelas utilitas yang disediakan.
            </p>
            
            <p className="note p2 border borderOrange3 bgOrange1 textOrange6 rounded lineHeightMd mt8 mb4">
                <i className="fas fa-exclamation-circle textSm mr1"></i>
                <strong>Note: </strong> Untuk avatar bulat, pastikan gambar Anda memiliki dimensi yang sama yaitu harus berupa gambar persegi untuk ditampilkan sebagai lingkaran yang sesuai. Jika tinggi dan lebar gambar berbeda maka akan terlihat lebih seperti elips daripada lingkaran.
            </p>
            
        </div>
    )
}
