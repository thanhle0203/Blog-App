import React from 'react'
import "./post.css"

const Post = () => {
  return (
    <div className='post'>
      <img 
        className='postImg'
        src='https://images.genius.com/f2f00ab0ec25c3ba62f582f47c71ccb4.1000x1000x1.jpg'
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
            <span className='postCat'>Music</span>
            <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>One Direction</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        If you're pretending from the start. Like this, with a tight grip. Then my kiss can mend your broken heart. I might miss. Everything you said to me.
      </p>

    </div>
  )
}

export default Post
