import React , {useState} from 'react'
import './index.scss'
import ProgressBar from '../ProgressBar'


const LanguageList = () => {

  const [languages] = useState(
    [
      {name: "Java", progress: 100, className: "java-progress", years: 2},
      {name: "HTML/CSS/JS", progress: 100, className: "web-progress", years: 2},
      {name: "C", progress: 50, className: "c-progress", years: 1},
      {name: "flutter", progress: 50, className: "flutter-progress", years: 1},
    ]
  )

  return (
    <div>
        <h2>Languages</h2>
        <ul>
          {languages.map((languages, index) => (
            <li key={index}>
                <span>{languages.name}: {`${languages.years}`}</span>
                <ProgressBar progress={languages.progress} className={languages.className}/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default LanguageList
