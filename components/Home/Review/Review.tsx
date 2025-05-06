"use client"

import { clients } from "@/data/data";
import Card from "./Card";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Review = () => {
  return (
    <div className="my-16 relative">
      <h1 className="text-2xl sm:text-3xl text-center text-gray-600 dark:text-white font-bold">
        5k+ Customer&apos;s Trust Us
      </h1>
      <span className="w-16 bg-pink-600 mx-auto mt-3 block"></span>
      <div className="w-3/4 mx-auto mt-16">
      <Carousel
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
 >  
    {clients.map((item) => {
      return <div key={item.id}>
        <Card item={item}/>
      </div>
    })}
    </Carousel>
      </div>
    </div>
  );
};

export default Review;
