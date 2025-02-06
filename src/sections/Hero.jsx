import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import { shoes } from '../static'
import ShoeCard from '../components/ShoeCard'
console.log("shoes", shoes);

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen 
    gap-10 mac-container border-2  p-2'>
      <div className='relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
      
      <p className='text-xl font-montserrat text-coral-red'>Our Summer Collection</p>
      <h1 className='mt-10 text-8xl font-montserrat max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
        <br />
        <span className='text-coral-red inline-block mt-3'>Nike</span>
        {" "}Shoes
      </h1>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'> Discover stylish Nike arrivals, quality comfort, and innovation for
      your active life.</p>
      <Button label="Shop now" iconURL={arrowRight}/>

      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-4xl font-palanquin font-bold'>1k+</h1>
          <p className='leading-7 text-slate-gray font-montserrat'>Brands</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-4xl font-palanquin font-bold'>500+</h1>
          <p  className='leading-7 text-slate-gray font-montserrat'>Shops</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-4xl font-palanquin font-bold'>250k+</h1>
          <p className='leading-7 text-slate-gray font-montserrat'>Customers</p>
        </div>
      </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />
       
        

<div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}

export default Hero