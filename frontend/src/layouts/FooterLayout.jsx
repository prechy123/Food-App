import React from 'react'
import facebook from '../image/facebook.png'
import github from '../image/github.png'
import instagram from '../image/instagram.png'
import linkedin from '../image/linkedin.png'

export default function FooterLayout() {
    const date = new Date().getFullYear()
  return (
    <footer>
        <div className='img'>
            <img src={facebook} alt="facebook" width={30}/>
            <img src={github} alt="github" width={30}/>
            <img src={instagram} alt="instagram" width={30}/>
            <img src={linkedin} alt="linkedin" width={30}/>
        </div>
        <div>
            <p>Copyright {date}.</p>
        </div>
    </footer>
  )
}
