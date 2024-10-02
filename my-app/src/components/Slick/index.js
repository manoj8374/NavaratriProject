import React from "react";
import Slider from "react-slick";

import styled from "styled-components";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./index.css";


const SlickComponent = () => {
  const settings = {
    dots: false, // Shows dots below the carousel
    infinite: true, // Loops the carousel
    speed: 300, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Speed of auto-play
    responsive: [
        {
          // From 900px to 1024px
          breakpoint: 1024,
          settings: {
            centerMode: false, // Disable center mode below 1024px
            slidesToShow: 2, // Show 2 slides between 900px and 1024px
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          // From 600px to 900px
          breakpoint: 900,
          settings: {
            centerMode: false, // Disable center mode below 900px
            slidesToShow: 2, // Show 2 slides between 600px and 900px
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          // Below 600px
          breakpoint: 700,
          settings: {
            centerMode: false,
            slidesToShow: 1, // Show 1 slide for very small screens
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
  };

  return (
    <>
    
    
    <div className="backgroundColorContainer">
    <ImagesHeading>Celebrate the Spirit of Navaratri</ImagesHeading>
        <div style={{ width: "80%", margin: "auto"}}>
      <Slider {...settings}>
        <ImageContainer>
          <ImageElement src="https://media.gettyimages.com/id/1052146326/photo/indian-men-and-women-perform-garba-amp-dandiya-dance-during-the-navratri-festival-nine-days.jpg?s=612x612&w=0&k=20&c=YfUjyc66SbvYkPyomnXz88CsIS_aN_NXjGBvsG1TEz8=" alt="Slide 1" />
        </ImageContainer>
        <ImageContainer>
          <ImageElement src="https://media.gettyimages.com/id/522832844/photo/baroda-india-people-enjoying-garba-dance-in-colorful-traditional-gujrati-dresses-on-the.jpg?s=612x612&w=0&k=20&c=FFvB05xgQjM5E-gY-gKs61pJgDWRu3HZewJtpGZ7KCU=" alt="Slide 2" />
        </ImageContainer>
        <ImageContainer>
          <ImageElement src="https://5.imimg.com/data5/SELLER/Default/2021/2/YA/VV/WU/41982123/dandiya-dance-group-for-wedding-500x500.jpg" alt="Slide 3" />
        </ImageContainer>
      </Slider>
    </div>
    </div>
    </>
    
  );
};


const ImagesHeading = styled.h1`
    text-align: center;
    color: #FEBA08;
  `

  const ImageContainer = styled.div`
  padding: 15px;
  `

const ImageElement = styled.img`
  object-fit: cover;
  height: 300px;
  width: 100%;
`;

export default SlickComponent;
