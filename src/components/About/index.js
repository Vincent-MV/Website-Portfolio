import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react';
import { Loader } from 'react-loaders';
import { faAngular, faCss3,  faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';


 const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect (() => {
            const timer = setTimeout (() => {
                setLetterClass("text-animate-hover")
            }, 3000);
             return () => clearTimeout(timer);
        }, [] )
    return (
            <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    < AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't' ,' ' , 'm' , 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am an aspiring front-end developer with a strong foundation in communication, problem-solving, and collaboration. My unique background has equipped me with the analytical mindset and growing technical skills needed to create user-focused, visually appealing, and functional web interfaces while thriving in a team environment.
                </p>
            </div>

            <div className='stage-cube-cont'> 
                <div className='cube-spinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>

                    <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>

                    <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>

                    <div className='face4'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>

                    <div className='face5'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>

                    <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>

    )
}

export default About
  