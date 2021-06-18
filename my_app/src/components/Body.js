import React from 'react'
import Capture2 from '../images/Capture2.JPG';
import Capture3 from '../images/Capture3.JPG';
import Logo1 from '../images/logo1.JPG';
import LogoB from '../images/logoB.JPG';
import LogoCoin from '../images/logoCoin.JPG';
import LogoColo from '../images/logoColo.JPG';
import LogoGit from '../images/logoGit.JPG';
import LogoZeb from '../images/logoZeb.JPG';


const Body = () => {
    return (
        <>
        <div class="padding-bottom-50">
            <div className="Container-fluid " >
                <div className="d-flex justify-content-around align-items-center average-header" style={{padding: "10px 0px"}}>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">0.3 %</div>
                        <div className="average-header-subHeading">5 Mins</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">1.26 %</div>
                        <div className="average-header-subHeading">1 Hour</div>
                    </div>
                    <div >
                        <div className="text-center font-32 average-block">
                            <div className="average-subText"><span className="subText-heading">Best Price to Trade</span></div>
                            <div className="average-heading" >₹ 29,00,240</div>
                            <div className="average-subText">Average BTC/INR net price including commission</div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">2.07 %</div>
                        <div className="average-header-subHeading">1 Day</div>
                    </div>
                    <div className="text-center">
                        <div className="average-header-maintext color-green">11.14 %</div>
                        <div className="average-header-subHeading">7 Days</div>
                    </div>
                </div>
                <a target="_blank" href="https://finstreet.in/">
                    <img src={Capture2} className="imgp" alt="imgp"/>
                </a>
                
                    
            </div>
            
            
            <div className="fiat-crypto-table table-responsive" >
                <table className="table table-borderless text-center">
                    <thead>
                        <tr id="throw">
                            <th>
                                <h4><span className="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Platform</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Last Traded Price</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Buy / Sell Price</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Difference</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Savings</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="tb">
                        <tr class="tbr1">
                            <td className="align-middle">
                                <h4 className="table-text">1</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn">
                                    <h4 className="table-text"><img src={Logo1} className="exchange-logo"/><span className="exchange-name ">WazirX</span></h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 29,68,303</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 29,64,144 / ₹ 29,68,303</span></h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">2.55 %</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">▲ ₹ 73,911</h4>
                            </td>
                        </tr>
                        <tr className="tbr2">
                            <td className="align-middle">
                                <h4 className="table-text">2</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href="https://bit.ly/2BJxccc">
                                    <h4 className="table-text"><img src={LogoB} className="exchange-logo"/><span className="exchange-name ">Bitbns</span>
                                    </h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 29,64,142</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 29,64,142 / ₹ 29,71,865</span>
                                </h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">2.41 %</h4>
                                
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">▲ ₹ 69,750</h4>
                            </td>
                        </tr>
                        
                        <tr>
                            <td className="align-middle">
                                <h4 className="table-text">3</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href=" ">
                                    <h4 className="table-text"> <img src={LogoGit}className="exchange-logo"/><span className="exchange-name ">Giotus</span></h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 29,15,000</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 29,25,070 / ₹ 29,65,000</span></h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">0.71 %</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">▲ ₹ 20,608</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">
                                <h4 className="table-text">4</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href=" ">
                                    <h4 className="table-text"> <img src={LogoColo}className="exchange-logo"/><span className="exchange-name ">Colodax</span></h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 25,83,138</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 25,75,167 / ₹ 28,77,409 </span></h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textrd color-green">-8.77% </h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textrd color-green">▼ ₹ 248,394</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">
                                <h4 className="table-text">5</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href=" ">
                                    <h4 className="table-text"> <img src={LogoZeb}className="exchange-logo"/><span className="exchange-name ">Zebpay</span></h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 298,78,513 </h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 28,80,000 / ₹ 28,77,409</span></h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">1.66 %</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">▲ ₹ 44,506</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className="align-middle">
                                <h4 className="table-text">6</h4>
                            </td>
                            <td className="align-middle">
                                <a target="_blank" href=" ">
                                    <h4 className="table-text"><img src={LogoCoin}className="exchange-logo"/><span className="exchange-name ">CoinDCX</span></h4>
                                </a>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text">₹ 29,72,260</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-text"><span>₹ 29,68,000 / ₹ 29,72,260</span></h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">2.69 %</h4>
                            </td>
                            <td className="align-middle">
                                <h4 className="table-textd color-green">▲ ₹ 77,868</h4>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="padding-header" >
                <a target="_blank" href="https://ftx.com/#a=finstreet">
                    <img src={Capture3} alt="capture3" className="capture3"/>
                </a>
            </div>
           
        </div>
        
        <div className="footer">
            <div className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">Developed By <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{color:" rgb(61, 198, 193)"}}> QuadBTech</a></div>
               <div className="footer-text1 pointer" style={{ml:" auto"}}><a href="mailto:support@hodlinfo.com" className="footer-text-link">Support</a></div>
            </div>
        </div>
        <div class="but " >
            <button class="add-button btn btn-outline-info">Add Hodl-info to home screen</button>
        </div>
        
        </>
    )
}


export default Body;
