import Carousel from 'react-bootstrap/Carousel';
import "./slider.css"

export default function Slider() {

  return (
    <Carousel fade id='carousel' className=''>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg"
          src="https://cdn.shopify.com/s/files/1/0060/7852/9602/files/Buy-Mens-Fashion-Clothing_1024x1024.png?v=1547559419"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg"
          src="https://wallpaperaccess.com/full/1437673.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 sliderimg"
          src="https://wallpaperaccess.com/full/5267670.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}