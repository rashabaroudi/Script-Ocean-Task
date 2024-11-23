import React from 'react'
import Slider from "react-slick";
import Headline from '../Headline/Headline'
import Card from '../Card/Card';


const CarouselSection = () => {
 

  
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#69A5A4" }}
      onClick={onClick}
    />
  );
}

  const cardsData=[
    {
      id:1,
      name:'Jahne',
      comment:'I was amazed by how intuitive the platform is. Even with no prior experience, I was able to design a beautiful website in no time!',
      photo:'/src/assets/images/Jahne.png'
    },
    {
      id:2,
      name:'John',
      comment:'The website builder platform helped me create a professional website for my business quickly and easily. I love the AI-powered features!',
      photo:'/src/assets/images/John.png'
    },
    {
      id:3,
      name:'John',
      comment:'The website builder platform helped me create a professional website for my business quickly and easily. I love the AI-powered features!',
      photo:'/src/assets/images/John.png'
    },
  ]
  const settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='w-full flex flex-col justify-center items-center gap-[60px] min-h-[694px]'>
      <Headline title="What Our Clients Says About us" style='text-center'/>
      <div className="container m-auto  p-8 sm:p-5 ">
        <Slider {...settings}>
          
            {cardsData.map(({id,name,comment,photo})=>(
              <Card key={id} comment={comment} name={name} photo={photo}/>
            ))}
          
          
          
          
        </Slider>
    </div>
</div>
    )}

export default CarouselSection
