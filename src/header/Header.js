import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img
            className='headerImg'
            src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265648.jpg?crop=1.00xw:0.752xh;0,0.0817xh&resize=640:*'
            alt=''
        />
    </div>
  )
}

export default Header