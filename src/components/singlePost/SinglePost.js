import React from 'react'
import "./singlePost.css"

const SinglePost = () => {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img
                src='https://ca-times.brightspotcdn.com/dims4/default/29294bc/2147483647/strip/true/crop/6720x4480+0+0/resize/840x560!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3d%2Fa5%2Fc976c3764acfb5ecc636938377b6%2Fwk-national-parks-yosemite-np-08.jpg'
                alt=''
                className='singlePostImg'
            />
            <h1 className='singlePostTitle'>
                Yosemite National Park
                <div className='singlePostEdit'>
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
               
            </h1>
            <p>
                Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome. In Yosemite Village are shops, restaurants, lodging, the Yosemite Museum and the Ansel Adams Gallery, with prints of the photographer’s renowned black-and-white landscapes of the area. 
            </p>
        </div>
    </div>
  )
}

export default SinglePost