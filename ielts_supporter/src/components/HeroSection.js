import React from 'react';
import './HeroSection.css';
import Carousel from 'react-bootstrap/Carousel';


function HeroSection() {
  return (
    <section>
      <Carousel data-bs-theme="lg">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-img.jpg"
            loading='lazy'
            alt="First slide"
          />
          <Carousel.Caption className='overlay'>

            <h1>WELLCOME TO IELTS SUPPORTER</h1>


          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-img2.jpg"
            loading='lazy'
            alt="Second slide"
          />
          <Carousel.Caption className='overlay'>
            <h1>WELLCOME TO IELTS SUPPORTER</h1>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider-img3.jpg"
            loading='lazy'
            alt="Third slide"
          />
          <Carousel.Caption className='overlay'>
            <h1>WELLCOME TO IELTS SUPPORTER</h1>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
    /*<div className='hero-container'>
      <h1>WELLCOME TO IELTS SUPPORTER</h1>
      <p>Lets start the class</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div> */
  );
}

export default HeroSection;