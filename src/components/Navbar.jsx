import React from 'react'

export default function Navbar() {
    return (
        <nav className="app-navbar pl4 pr4 bgWhite md:pl8 md:pr8 pt2 pb2 bgWhite shadowMdGray2 textWhite">
            <div className=" displayFlex justifyBetween itemsCenter">
                <a href="/" className="navbar-brand textRed5 hover:textRed3 textMd displayFlex itemsCenter fontSemiBold p1 mr4">
                    <img src="./logo.svg" className="w10" alt="MantanLogo"/> 
                    <span className="ml1 logofont">Mantan UI</span>
                </a>

                <ul className="nav-links displayFlex itemsCenter">
                    <li className="fontSemiBold textBlack listNoStyle p2">
                        <a href="https://github.com/daffadev-inc/mantan_ui" className="" title='View on Github'>
                            <i className="fab fa-github textTeal6 textXl hover:textTeal3"></i>
                        </a>
                    </li>
                    <li className="textLg fontSemiBold textGray4 listNoStyle p2">
                        <button className="p2 roundedPill bgTeal6 hover:bgTeal3 borderNone">
                            <i className="fas fa-moon textWhite textRg"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
