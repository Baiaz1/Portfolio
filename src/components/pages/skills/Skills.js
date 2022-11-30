import React from 'react';
import "./Skills.css"
import {SiJavascript} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {DiReact} from 'react-icons/di'
import {SiCodewars} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'
// import {DiNodejsSmall} from 'react-icons/di'
// import {SiTypescript} from 'react-icons/si'

const Skills = () => {
    return (
        <div className="resume-container" id="skill">
            <div className='skill-short-description'>
                <p className='skill-short-description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, esse itaque magni molestiae optio quaerat!
                </p>
            </div>
            <div className='skills-first-container'>
            <div className="skill-box">
                <AiFillHtml5 className='icon-lang'/>
                <p>HTML - ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate eligendi eos odio pariatur placeat possimus rerum similique ullam vel?</p>
            </div>
            <div className="skill-box">
                <IoLogoCss3 className='icon-lang'/>
                <p>CSS - ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, velit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, repellendus.</p>
            </div>
            </div>
            <div className='skills-second-container'>
            <div className="skill-box">
                <SiJavascript className='icon-lang'/>
                <p>JAVASCRIPT - ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur corporis doloribus eaque fugit tenetur? Eos libero modi quos voluptas?</p>
            </div>
            <div className="skill-box">
                <DiReact className='icon-lang'/>
                <p>REACT - ipsum dolor sit amet, consectetur adipisicing elit. Dolore earum esse iusto laborum qui sequi tempore! Distinctio officia omnis repellendus?</p>
            </div>
            </div>
            <div className='skills-third-container'>
                <div className="skill-box">
                    <SiCodewars className='icon-lang'/>
                    <p><a href="https://www.codewars.com/users/kalfu">CODEWARS</a> - ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur corporis doloribus eaque fugit tenetur? Eos libero modi quos voluptas?</p>
                </div>
                <div className="skill-box">
                    <AiFillGithub className='icon-lang'/>
                    <p><a href="https://github.com/Baiaz1">GITHUB</a> - ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur corporis doloribus eaque fugit tenetur? Eos libero modi quos voluptas?</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;