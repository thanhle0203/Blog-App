import React from 'react'
import "./topbar.css"

const TopBar = () => {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>Right</div>
    </div>
  )
}

export default TopBar