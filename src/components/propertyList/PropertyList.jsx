import React from 'react'
import "./PropertyList.css"

export const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotel</h1>
                <h2>233 hotels available</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>23 aparments available</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>53 villas available</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>3 cabins available</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Holiday Homes</h1>
                <h2>33 holiday homes available</h2>
            </div>
        </div>
    </div>
  )
}
