import React from 'react'
import "./sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img 
                className='sidebarImg' 
                src='https://drexel.edu/~/media/Images/cci/Stories/Remote%20Software%20Engineering-Page.ashx?h=1000&w=1500&hash=6BB2151F2495C52A21F368DADF9D7D9604BC1936' 
                alt=''
            />
            <p>
                Hardworking and passionate about technology with strong problem-solving skills eager to secure an entry-level Full 
                Stack Development, Data Science, or Software Development position in the tech environment. Excited to help the team achieve company goals.

            </p>
        </div>

        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Food</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <ul className='sidebarSocial'>
                <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className= "sidebarIcon fa-brands fa-twitter"></i>
                <i className= "sidebarIcon fa-brands fa-square-instagram"></i>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar