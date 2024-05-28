import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../styles/Homepage.css';
import image from '../assets/whatsapp-image-2023-03-30-at-12-1680161092-removebg-preview.png';
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

function Homepage() {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (
        <div>
            <div className="black-bg">

                <div class="image-container">
                    <div className='black-vignette'>
                    </div>
                    <div className='newimg'>
                        <div className='overall-img'>
                            <img className="Disney-logo" src={image} alt="Disney Plus Logo" />
                            <button className="sub-btn">Subscribe</button>
                        </div>
                        <div className='fail-text'>
                            <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1640218-t-af2c7898f613" alt="" />
                            <h3>2023  2h 26m  5 Languages U </h3>
                            <p>Every fight begins with a failurel Braving against the odds, <br /> Manoj Kumar Sharma puts it all on the line to crack the nation's <br /> much sought-after exam: UPSC.</p>
                            <h3>Biopic | Common-Man Struggles | Underdog | Thought-provoking</h3>
                            <button>Subscribe to Watch</button>
                        </div>
                    </div>
                </div>
                <div className='icons'>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>account_circle</span>
                        {showTooltip && <span id='t' className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>My Space</span>}
                    </div>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>home</span>
                        {showTooltip && <span className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>Home</span>}
                    </div>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>desktop_windows</span>
                        {showTooltip && <span className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>TV</span>}
                    </div>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>movie</span>
                        {showTooltip && <span className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>Movies</span>}
                    </div>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>sports_volleyball</span>
                        {showTooltip && <span className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>Sports</span>}
                    </div>
                    <div className='icon-letter'>
                        <span className={`material-symbols-outlined ${showTooltip ? 'animated' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>category</span>
                        {showTooltip && <span className={`My-Show-word ${showTooltip ? 'animated' : ''}`}>category</span>}
                    </div>
                </div>
                <div className='movie-images'>
                    <h1 className='latest-text'>Latest Release</h1>
                    <Swiper
                        spaceBetween={70}
                        slidesPerView={7}
                        navigation={true}
                        modules={[Navigation]}
                    >
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1287/1715914641287-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6252/1716293606252-i" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4819/1714983254819-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9678/1715930209678-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/4517/1715415404517-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7340/1714178077340-i" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/891/1714740350891-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/215/1714559450215-v" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6024/1714890756024-i" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/5128/1714219095128-i" alt="" /></SwiperSlide>
                        <SwiperSlide><img className='img' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7593/1527593-i-c5046aeb1b81" alt="" /></SwiperSlide>
                    </Swiper>
                </div>
                <div className='movie-images1'>
                    <h1 className='latest-text'>popular Movies</h1>
                    <div className='change'>
                        <Swiper
                            spaceBetween={70}
                            slidesPerView={7}
                            navigation={true}
                            modules={[Navigation]}
                        >
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/3410/1623410-i-5fe8c00b81e1" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7516/1597516-i-751da827e22b" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1791/1611791-i-3b22c4f693bd" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/old_images/vertical/MOVIE/3314/1770003314/1770003314-v" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2542/1602542-i-f8718d79a7ea" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2326/1707131222326-i" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9163/1707274889163-i" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6502/1366502-i-d657e17c33d4" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/7746/1577746-i-1d03dd00561f" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/2630/1372630-i-8e2319760990" alt="" /></SwiperSlide>
                            <SwiperSlide><img className='img1' src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/8969/1714634728969-i" alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
