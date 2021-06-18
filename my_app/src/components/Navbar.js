import React from 'react'
import Capture from '../images/Capture.JPG';
import Capture4 from '../images/Capture4.JPG';
import Capture5 from '../images/Capture5.JPG';
const Navbar = () => {
    return (
        <div className="navbody">
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                
                <img src={Capture} alt="logo"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item1 dropdown ">
                    <button className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        INR
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">INR</a></li>
                        
                    </ul>
                    </li>
                    <li className="nav-item2 dropdown">
                    <button className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        BTC
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">BTC</a></li>
                        <li><a className="dropdown-item" href="#">ETH</a></li>
                        <li><a className="dropdown-item" href="#">USDT</a></li>
                        <li><a className="dropdown-item" href="#">XRP</a></li>
                        <li><a className="dropdown-item" href="#">TRX</a></li>
                        <li><a className="dropdown-item" href="#">DASH</a></li>
                        <li><a className="dropdown-item" href="#">ZEC</a></li>
                        <li><a className="dropdown-item" href="#">XEM</a></li>
                        <li><a className="dropdown-item" href="#">LOST</a></li>
                        <li><a className="dropdown-item" href="#">WIN</a></li>
                        <li><a className="dropdown-item" href="#">BTT</a></li>
                        <li><a className="dropdown-item" href="#">WRX</a></li>
                    </ul>
                    </li>
                    <li className="nav-item3 dropdown">
                    <button className="nav-link " href="www.wazrix.com" id="navbarDropdown" role="button"  aria-expanded="false">
                        BUY BTC
                    </button>
                    </li>
                    
                </ul>
                    <img src={Capture4} alt="timer" className="timer"/>
                    <button className="tbtn " type="Onclick">Connect Telegram</button>
                    <img src={Capture5} className="switch" alt="switch"/>
                
                </div>
            </div>
            </nav>
            
        </div>
    )
}

export default Navbar;
