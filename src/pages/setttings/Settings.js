import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./settings.css"

export const Settings = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='setttingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle' >Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://d3kqdc25i4tl0t.cloudfront.net/articles/content/519_295775_tech.hero.jpg'
              alt=""
            />
            <label htmlFor='fileInput'>
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type='file' id='fileInput' style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Thanh Le" />
          <label>Email</label>
          <input type='email' placeholder="thanhlevan0203@gmail.com" />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit' type='submit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
