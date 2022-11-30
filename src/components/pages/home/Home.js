import React from 'react';
import "./Home.css"
import myimg from '../../../img/myIMG.jpg'
// import {BsPersonFill} from 'react-icons/bs'

const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="home-box">
                <div className='icon-person-box'>
                    {/*<BsPersonFill className='icon-person'/>*/}
                    <img src={myimg} alt="" className='icon-person'/>
                </div>
                <div className='home-description'>
                    <p className='home-description-short'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa deleniti
                    </p>
                    <p>
                        maxime mollitia repudiandae. Ad asperiores impedit libero maiores mollitia, nihil nobis qui repellat. Deleniti ea eligendi omnis tempora!
                        Lorem ipsum dolor sit
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;