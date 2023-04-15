import React from 'react'
import "./Footer.css"

const FooterComponent = () => {
  return (
    <div>
        <footer className='footer'>
            <span>All Right Reserved &copy; {new Date().getFullYear()}</span>
        </footer>
    </div>
  )
}

export default FooterComponent