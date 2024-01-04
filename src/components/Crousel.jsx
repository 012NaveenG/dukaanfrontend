import React from 'react'

const Crousel = () => {
    return (
        <div className="carousel w-[98%] mx-[11px] h-52">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://storage.googleapis.com/dam-bks-prd-1385851.bks.prd.v8.commerce.mi9cloud.com/Images/SpringMarket/23-00982-SPR---Grilling-2023---Website-Carousels-1490x395-P2.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.hostgator.com/blog/wp-content/uploads/2021/12/create-coupon-strategy-for-ecommerce-store-1024x536.jpeg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://th.bing.com/th/id/R.127ac28f6a987ed3847ba0a23079b9ac?rik=zhUSEc30mDj9wQ&riu=http%3a%2f%2fwww.libertyoilmills.com%2fimages%2fheaderimage-edible-oils.jpg&ehk=SrMHy0U2C1lY2Xd%2f8ohmh4YkvEMR54Gly0IjWli9%2fVA%3d&risl=&pid=ImgRaw&r=0" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://www.yogimart.de/images/uploaded/YM/Rice%20and%20Rice%20Products%20Banner%20English.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    )
}

export default Crousel