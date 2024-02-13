import React, { useState } from 'react'
import "./Hotel.css"
import { Navbar } from "../../components/navbar/Navbar"
import { Header } from "../../components/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { MailList } from "../../components/mailList/MailList";
import { Footer } from "../../components/footer/Footer";

export const Hotel = () => {
  
  const[slideNumber, setSlideNumber] = useState(0);
  const[openSlider, setOpenSlider] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475755127.jpg?k=b74f27a5b0d9a40576bac6a1a338358368943f7f360a89fac8da32209ac2a2c4&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454025540.jpg?k=465002041e9876f92512b737049427d04061fb66c8696053b9ec9e64abacf9e7&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/428926271.jpg?k=5907eecc341de9333286bfeec4bfb7d624472e3bde49bb97a13a5f5b2e10050c&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454029586.jpg?k=a46b379282b45b853be766c5912066e127ea3c9a0449ded964317fca220f901a&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/510854951.jpg?k=fae0a9529496d9b80537720967bfda79c2b430393758ef3c8f0a49ace0404274&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/454025891.jpg?k=f27ef5abdd1cae10b5d3278bd103222a417dc83f3fba26b4ed7d48c734d3ef26&o=&hp=1"
    },
  ]

  const handleClick = (i) => {
    setSlideNumber(i);
    setOpenSlider(true);
  }

  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        
        {openSlider && <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpenSlider(false)}/>
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=> handleMove("l")}/>
            <div className="sliderWrapper">
              <img key={slideNumber} src={photos[slideNumber].src} alt="" className='sliderImg'/>
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=> handleMove("r")}/>
        </div>}
        
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now</button>
          <h1 className="hotelTitle">Bulgari Hotel</h1>
          <div className="hotelAddres">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>104-0028 Tokyo-to, 2-2-1 Yaesu, Chuo-ku, Japan</span>
          </div>
          <span className="hotelDistance">
            Excellent location show map
          </span>
          <span className="hotelPriceHighlight">
            Low rates • No booking fees • Find cheaper? We'll refund the difference
          </span>
          <div className="hotelImages">
            {photos.map((photos, i)=>(
              <div className="hotelImgWrapper">
                <img key={i} onClick={()=>handleClick(i)} src={photos.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Bulgari Hotel Tokyo</h1>
              <p className="hotelDesc">
                Ideally set in the centre of Tokyo, Bulgari Hotel Tokyo features air-conditioned rooms, a fitness centre, free WiFi and a garden. 
                Featuring a restaurant, the property also has a terrace, as well as an indoor pool and a hot tub. Private parking is available on site.
                All rooms in the hotel are fitted with a flat-screen TV. At Bulgari Hotel Tokyo the rooms are fitted with a private bathroom with a bidet.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 5-night stay!</h1>
              <span>
                Situated in the real heart of Tokyo, this hotel has an excellent location score of 9.1
              </span>
              <h2><b>NPR 870,896</b> (5 nights)</h2>
              <button>Reserve</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer className="footer"/>

      </div>
      
    </div>
  )
}
