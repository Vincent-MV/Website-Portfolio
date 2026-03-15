import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders" 
import portfolio from '../../assets/data/data.json'

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState("text-animate");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    },3000);

    return () => {
      clearTimeout(timer);
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
        <div className='images-container'>
            {
              portfolio.map((port, idx) => {
                return(
                  <div key={idx} className="image-box">
                        <img src={port.cover} alt="portfolio" className="portfolio-image"/>

                  </div>  
                )
              })
            }
        </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
            <h1 className="page-title">
              <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")} idx={15}/>
            </h1>
            <div>{renderPortfolio(portfolio.portfolio)}</div>
      </div>
      <Loader type="pacman"/>
    </>
  )
}

export default Portfolio
