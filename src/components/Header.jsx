import React from 'react'
import Slider from 'react-slick'
import img1 from "../assets/images/slider-image-1.jpeg";
import img2 from "../assets/images/slider-image-2.jpeg";
import img3 from "../assets/images/slider-image-3.jpeg";
import blog1 from "../assets/images/blog-img-1.jpeg";
import blog2 from "../assets/images/blog-img-2.jpeg";
export default function Header() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
      };


  return (
    <header className=' mb-5 hidden md:block'>
        <div className="container flex">
        <div className=' w-2/3'>
            <Slider {...settings}>
                <img src={img1} className='h-[500px] object-cover' alt="" />
                <img src={img2} className='h-[500px] object-cover' alt="" />
                <img src={img3} className='h-[500px] object-cover' alt="" />
                
            </Slider>
        </div>
        <div className="w-1/3">
            <img src={blog1} className='h-[250px] object-cover' alt="" />
            <img src={blog2} className='h-[250px] object-cover' alt="" />
        </div>
        </div>
    </header>
  )
}
