import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCloudArrowUp, faCoffee, faPerson, faPersonRifle, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import React, {useState} from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./maintenance.css";

const element = <FontAwesomeIcon icon = {faBars} />
const element1 = <FontAwesomeIcon icon = {faCloudArrowUp} />

const Maintenance  = ( ) => {

   
    const[phone,setPhone] = useState('');

    const  handlePhone = (e) => {
        setPhone(e.target.value);
    }

    return (

        <div className="container">

            <div className="nav">

            <div className='logo'>
                <img src={process.env.PUBLIC_URL + "assets/images/propLogo.png"} />
            </div>
            <div>

                    <h2>Payment</h2>
                    <p>Make payment of your properties here</p>
            </div>
                    <div className="nav-details">
                            <ul className = "ul-list">
                                <li><a href = "#">Post AD</a></li>
                                <li ><a href = "#" className='login'>LOGIN</a></li>
                                <li><a href = "#" >{element}</a></li>
   
                            </ul>
                    </div>
            </div>

            <div className="main-section">

                    <div className="left-side">

                    <img src={process.env.PUBLIC_URL + "assets/images/phoneImg.png"} />
                    </div>

            <div className = "right-side">

                 <div className='contact-details'>
                    <form>
                     <p className = "sel-payment">Select Payment <small className='red-star'>*</small></p>                  
                          <select className='society'>
                          <option>Society Maintenance</option>
                         </select>
             <div className='manage-details'>                       
                     <div className='left-detials'>
                         <p>Society <small>(Name As Per bank records)</small><small className='red-star'>*</small></p>
                                <input type = "text" name = "name" />               
                    <div className='pay-mode'>
                        <p>Choose Payment Mode <small className='red-star'>*</small></p>
                    </div>              
                    <div className="radio">    
                         <label>
                      <input type="radio" value="option1"  className='radio1'/>
                            To Bank Account
                         </label>
                            <label>
                             <input type="radio" value="option2" className='radio2'/>To UPT Id
                            </label>
                            </div>  
                   <p>Society Bank Account Number <small className='red-star'>*</small></p>
                                <input type = "text" name = "account"/>
                            <p>IFSC code <small className='red-star'>*</small></p>
                                <input type = "text" name = "code" />
                            <p>Property Address <small className='red-star'>*</small></p>
                                <input type = "text" name = 'address'/>
                        </div>
                        <div className='right-details'>
                                    <p>Society Contact Number <small className='red-star'>*</small></p>
                                    <input type = "text" name = "contact" />
                                    {/* <PhoneInput className = "phoneInput"
                                    country={'us'}
                                    value={phone}
                                    onChange={handlePhone}
                                    /> */}
                              <p>Upload Maintenance Bill <small className='red-star'>*</small></p> 
                                         <input type = "text" name = "bill" placeholder  = {element1} />
                                      
                                <p>Confirm Account Number <small className='red-star'>*</small></p>
                                    <input type = "text" name = "account" />

                                <p>Flat Number <small className='red-star'>*</small></p>
                                  
                                    <input type = "text" />
                                    <p>Maintenance Amount <small className='red-star'>*</small></p>
                                        <input type = "text" />
                                </div>     
                            </div>

                            <div className="footer">

                                <button className='btn white'>Save payment Details</button>

                                <button className='btn black'>Continue</button>

                                <p>Save your Payment details so you don't have to enter it again</p>
                                    
                                   </div>
                                </form>
                        </div>
                    </div>
            </div>


        </div>
    )

}

export default Maintenance;