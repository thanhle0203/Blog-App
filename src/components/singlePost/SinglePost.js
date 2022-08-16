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
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>
                    Author: <b>Wikipedia</b>
                </span>
                <span className='singlePostDate'>1 hour ago</span>
            </div>
            <p className='singlePostDesc'>
                Yosemite National Park (/joʊˈsɛmɪti/ yoh-SEM-ih-tee)[5] is an American national park in California,[6][7] surrounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest. The park is managed by the National Park Service and covers an area of 759,620 acres (1,187 sq mi; 3,074 km2)[3] and sits in four counties – centered in Tuolumne and Mariposa, extending north and east to Mono and south to Madera County. Designated a World Heritage Site in 1984, Yosemite is internationally recognized for its granite cliffs, waterfalls, clear streams, giant sequoia groves, lakes, mountains, meadows, glaciers, and biological diversity.[8] Almost 95 percent of the park is designated wilderness.[9] Yosemite is one of the largest and least fragmented habitat blocks in the Sierra Nevada, and the park supports a diversity of plants and animals.

                The geology of the Yosemite area is characterized by granite rocks and remnants of older rock. About 10 million years ago, the Sierra Nevada was uplifted and tilted to form its unique slopes, which increased the steepness of stream and river beds, resulting in the formation of deep, narrow canyons. About one million years ago glaciers formed at higher elevations which eventually melted and moved downslope, cutting and sculpting the U-shaped valley that attracts so many visitors to its scenic vistas today.[8]

                The Yosemite Valley itself was discovered by European American settlers in 1851. There are earlier instances of other travelers entering the Valley but James D. Savage is accredited with discovering the area that is now known as Yosemite National Park.[10] Despite Savage and other white men claiming their discovery of Yosemite, the region and Valley itself has been inhabited for nearly 4,000 years, although humans may have first visited the area as long as 8,000 to 10,000 years ago.[11][12]

                Yosemite was critical to the development of the national park idea. Galen Clark and others lobbied to protect Yosemite Valley from development, ultimately leading to President Abraham Lincoln signing the Yosemite Grant of 1864 which declared Yosemite as federally preserved land.[13] It was not until 1890 when John Muir led a successful movement which had Congress establish Yosemite Valley and its surrounding areas as a National Park. This helped pave the way for the National Park System.[13] Yosemite now draws about four million visitors each year,[14] and most visitors spend the majority of their time in the seven square miles (18 km2) of Yosemite Valley.[8] The park set a visitation record in 2016, surpassing five million visitors for the first time in its history.[15] The park began requiring reservations to access the park during peak periods starting in 2020 as a response to the rise in visitors.
         </p>
        </div>
    </div>
  )
}

export default SinglePost