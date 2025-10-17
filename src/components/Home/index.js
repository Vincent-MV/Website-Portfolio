import logoTitle from '../../assets/images/logo-v.png'
import { Link } from 'react-router-dom' // need to import
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import './index.scss'
import {Loader} from 'react-loaders'
import Logo from './Logo'
// import loader from 'react-loaders'



const Home  = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i','n','c','e','n','t',',',' ']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ','E', 'n', 'g', 'i', 'n','e', 'e', 'r']
    //const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ','E', 'n', 'g', 'i', 'n','e', 'e', 'r']

    useEffect (() => {
        const timer = setTimeout (() => {
            setLetterClass("text-animate-hover")
        }, 4000);
         return () => clearTimeout(timer);
    }, [] )

    return (
        <>
        <div className="container home-page">
            <div className="text-area">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br /> 
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
              
                < img src={logoTitle} alt="developer" />
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}
                    />
                <br /> 
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}
                    />
                </h1>
                <h2 >Frontend developer / Youtuber</h2>
                <Link to="/contact" className='flat-button'>Contact me</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman"/>
    </>

   );
    
}

export default Home