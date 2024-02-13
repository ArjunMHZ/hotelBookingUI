import React from 'react'
import "./FeaturedProperties.css"

export const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" alt="" className="fpImg" />
            <span className="fpName">Phuksundo Hotel</span>
            <span className="fpCity">Tokyo</span>
            <span className="fpPrice">Starting from $1200</span>
            <div className="fpRating">
                <button>8</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=" alt="" className="fpImg" />
            <span className="fpName">Lattte Hotel</span>
            <span className="fpCity">United Kingdom</span>
            <span className="fpPrice">Starting from $1000</span>
            <div className="fpRating">
                <button>8</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/97644401.webp?k=22466a369409724fbe8048f538bc8f218f123494d43ebd449cb848b9b895a2cb&o=" alt="" className="fpImg" />
            <span className="fpName">Romace El Casso</span>
            <span className="fpCity">Rome</span>
            <span className="fpPrice">Starting from $120</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        
    </div>
  )
}
