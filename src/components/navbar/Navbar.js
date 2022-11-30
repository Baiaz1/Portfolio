import React from 'react';
import "./Navbar.css"
import { Link } from "react-scroll";

export default class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            show: true,
            scrollPos: 0
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.handleScroll)
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        });
    };

    render() {
        return<>
            <nav className={this.state.show ? "active" : "hidden"}>
                <div className="navbar-elements">
                <Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                    <Link to="skill" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                    <Link to="works" spy={true} smooth={true} offset={-100} duration={500}>Works</Link>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                </div>
            </nav>
        </>
    }
}
