import React from 'react'
import "./SearchItem.css"

export const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/484426306.webp?k=7c4beaa9cd27cad9aae41a3953a71427937c20315393dc9eb386107448aa6f18&o=" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Bulgari Hotel Tokyo</h1>
            <span className="siDistance">3.6 km from centre</span>
            <span className="siTaxiOp">Metro access</span>
            <span className="siSubtitle">
                Deluxe King Room with Skyline View
            </span>
            <span className="siFeatures">
                1 extra-large double bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">No payment needed - <small>pay at the property</small></span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.3</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice">NPR 870,896</span>
                <span className="siTaxOp">+NPR 232,621 taxes and charges</span>
                <button className="siCheckButton">See availability</button>
            </div>
        </div>
    </div>
  )
}
