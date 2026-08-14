import './index.scss'
import {Loader} from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
     const [isLoading, setIsLoading] = useState(false) 
    const refForm = useRef()

    useEffect (() => {
            const timer = setTimeout (() => {
                setLetterClass("text-animate-hover")
            }, 3000);
             return () => clearTimeout(timer);
        }, [] )

        const sendEmail = (e) => {
            e.preventDefault()

            setIsLoading(true) 
            
            emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                refForm.current,
                {
                    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
                }
            )
            .then(
                (response) => {
                     console.log('SUCCESS!', response.status, response.text);
                    alert('Message sent successfully')
                    refForm.current.reset();
                    setIsLoading(false);
                },
                (err) => {
                    console.log('FAILED...', err); 
                    alert('Failed to send message, please try again')
                    setIsLoading(false);
                }
            )
        }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C','o','n','t','a','c','t',' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                    Thank you for reaching out!

                    I value open communication and encourage you to share any questions, feedback, or collaboration ideas. Feel free to connect with me by completing the contact form.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail} >
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>

                                <li>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>

                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required/>
                                </li>

                                <li>
                                    <textarea placeholder='Message' name='message' required/>
                                </li>

                                <li>
                                    <input 
                                      type='submit'
                                      className='flat-button'
                                      value={isLoading ? 'SENDING...' : 'SEND'} 
                                      disabled={isLoading} 
                                      />
                                </li>

                            </ul>
                        </form>

                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact