import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'
import loadingIcon from './loading.gif'

const About = () => {
  const [aboutData, setAboutData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`) //7002
      .then(response => {
        setAboutData(response.data)
        setLoaded(true)
      })
      .catch(err => {
        setError(err.message)
        setLoaded(true)
      }) }, [])
  return (
    <div className="About-container">
      <h1>About Me</h1>
      {error && <p className="About-error">{error}</p>}
      {!loaded && <img src={loadingIcon} alt="loading" />}
      {loaded && aboutData && (
        <>
          <img 
            src={aboutData.imageUrl} 
            alt="Kevin's profile" 
            className="About-image"
          />
          <p className="About-bio">{aboutData.bio}</p>
        </>
      )}
    </div>
  )
}
export default About