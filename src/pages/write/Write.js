import React from 'react'
import "./write.css"

export const Write = () => {
  return (
    <div className='write'>
        <img 
            className='writeImg'
            src='https://www.business2community.com/wp-content/uploads/2015/09/how-to-write-a-blog-post-1024x683.jpg-900x600.jpg'
            alt=''
        />
        <form className='writeForm'>
            <div className='writeFormGroup'>
                <label htmlFor='fileInput' >
                    <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className='writeFormGroup'>
                <textarea 
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeText"
                >
                    
                </textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
