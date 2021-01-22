import React from 'react'
import "./Home.css";
import Product from '../Product/Product';
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';

function Home() {

    useEffect(() => (
        slider(0)
    ), [])

    return (
        <div className='home'>
            <div className='home_container'>

                <div className="home_toast-container">
                    <ToastContainer />
                </div>

                {/* //todo corousal list */}

                <div className="home_slider-container">
                    <div className="home_slide">
                        <img
                            className="home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                            alt="image0" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image "
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                            alt="image1" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
                            alt="image2" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
                            alt="image3" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
                            alt="image4" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                            alt="image5" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
                            alt="image6" />
                    </div>
                    <div className="home_slide">
                        <img
                            className="home_image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
                            alt="image7" />
                    </div>
                </div>

                <div className="home_row">

                    <Product
                        id={90829332}
                        title="ASUS ProArt Studiobook Laptop, 15.6” 4K UHD Pantone Display, Intel Core i9-9980HK, Nvidia Quadro RTX 6000, 64GB DDR4, 1TB PCIe SSD"
                        price={9999.99}
                        rating={4.8}
                        image="https://images-na.ssl-images-amazon.com/images/I/81aYGtq0joL._AC_SL1500_.jpg"
                    />

                    <Product
                        id={90829432}
                        title="RUNMUS Stereo Gaming Headset Ear Headphones PS4 Headset Xbox One Headset with Surround Sound, LED Light & Noise Canceling Microphone"
                        price={49.98}
                        rating={4.6}
                        image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg"
                    />
                    <Product
                        id={90829732}
                        title="Crucial 32GB Kit (16GBx2) DDR4 2666 MT/s (PC4-21300) DR x8 SODIMM 260-Pin Memory - CT2K16G4SFD8266"
                        price={133.85}
                        rating={4.7}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Oys7qdffL._AC_SL1280_.jpg"
                    />


                </div>

                <div className="home_row">
                    <Product
                        id={12323}
                        title="SOakley Men's Kitchen Sink Backpack, stealthblack, One Size"
                        price={138.35}
                        rating={3.75}
                        image="https://images-na.ssl-images-amazon.com/images/I/714hGsMXZaL._AC_SL1500_.jpg"
                    />
                    <Product
                        id={12324}
                        title="Samsung Galaxy Watch (46mm, GPS, Bluetooth) – Silver/Black (US Version)"
                        price={239.00}
                        rating={4.25}
                        image="https://images-na.ssl-images-amazon.com/images/I/81ZKNYBwYlL._AC_SL1500_.jpg"
                    />
                    <Product
                        id={3254354345}
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4.1}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home_row">


                    <Product
                        id={90829532}
                        title="Bowflex SelectTech 552 - Two Adjustable Dumbbells"
                        price={399.99}
                        rating={4.6}
                        image="https://images-na.ssl-images-amazon.com/images/I/816lKIQ3C8L._AC_SL1500_.jpg"
                    />
                    <Product
                        id={12320}
                        title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={4.35} />

                    <Product
                        id={12321}
                        title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                        price={20}
                        rating={3.5}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
                    />
                    <Product
                        id={12334}
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={4.5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                </div>
            </div>

        </div>
    )
}

function slider(counter) {
    const slides = document.querySelectorAll(".home_image");

    slides.forEach((slide, index) => {
        if (index !== counter) {
            slide.style.visibility = `hidden`
            slide.classList.add(`image-${index}`)
        }
    })
    moveCorousal(counter, slides, slides.length)
}

function moveCorousal(counter, slides, len) {

    if (slides) {

        if (counter >= len - 1)
            counter = 0
        else
            counter += 1

        slides.forEach((slide, index) => {
            if (index === counter) {
                slide.style.visibility = `visible`
            }
            else {
                slide.style.visibility = `hidden`
            }
        })

    }
    setTimeout(() => {
        moveCorousal(counter, slides, len);
    }, 5000)
}

export default Home
