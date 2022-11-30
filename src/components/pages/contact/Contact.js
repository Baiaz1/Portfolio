import React from 'react';
import "./Contact.css"
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTwitter} from 'react-icons/bs'


const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <div className='contacts-description-short'>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid in laudantium, placeat quos recusandae soluta. Accusamus, asperiores aut dicta dolorem eligendi et facilis fugiat natus nemo non numquam porro, rerum saepe sequi suscipit temporibus veritatis vitae voluptatum. Culpa, id.
                </p>
            </div>
            <div className='contact-container-second'>
                <div className='say-hello'>
                    <a href="">
                        <h1>Hire me!</h1>
                        <HiOutlineMail className='icon-mail'/>
                    </a>
                </div>
            <div className='contact-icons'>
                {/*<div className='contact-box-icons'>*/}
                    <a href="">
                        <BsFacebook className='icon-facebook'/>
                    </a>
                    <a href="https://www.linkedin.com/in/baiaz-orozbekov-257a80252/">
                        <BsLinkedin className='icon-linkedin'/>
                    </a>
                {/*</div>*/}
                {/*<div className='contact-box-icons'>*/}
                    <a href="">
                        <AiOutlineInstagram className='icon-instagram'/>
                    </a>
                    <a href="">
                        <BsTwitter className='icon-twitter'/>
                    </a>
                {/*</div>*/}
            </div>
            </div>
        </div>
    );
};

export default Contact;