import React from 'react'
import "./Featured.css"

export const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://cdn.britannica.com/68/178668-050-DA998E6C/Durbar-Square-heart-district-Kathmandu-earthquake-Nepal-April-25-2015.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Kathmandu</h1>
                <h2>2000 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://xcmag.com/wp-content/uploads/2014/02/pokhara-602-402.gif" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Pokhara</h1>
                <h2>322 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://a2ztipsnepal.com/wp-content/uploads/Nuwakot-District-of-Nepal.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Nagarkot</h1>
                <h2>124 properties</h2>
            </div>
        </div>

    </div>
  )
}
