import logo from '../../assets/images/logo.png'
import Logo from '../Home/logo/index'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../animatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const hiArray = ['H','i',',']
    const imArray = ['I','\'','m']
    const nameArray = ['y', 'l', 'e']
    const jobArray = ['s','t','u','d','e','n','t']

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     },4)
    // },[])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> <AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={9} /> 
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={11} />
                <img src={logo} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
                </h1>
                <h2>Java / Javascript / Python / React / Machine Learning /<br/> C++ / Azure</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>   
            <Logo />   
        </div>
    );
}

export default Home;