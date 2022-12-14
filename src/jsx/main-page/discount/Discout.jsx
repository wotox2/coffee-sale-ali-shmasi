

import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import SlideData from "./components/SlideData";


import { ReactComponent as BrandIcon } from '../../../svgs/5.svg'

import { Icon } from '@iconify/react';

const Discout = () => {

    const [samples, setSample] = useState([
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900', image: require('../../../images/discount/1.jpg'),
            region: 'all',
            discount: { has: true, value: 10, price: '60,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#2',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/4.jpg'),
            discount: { has: true, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
        {
            id: '#1',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '67,900', image: require('../../../images/discount/1.jpg'),
            region: 'all',
            discount: { has: true, value: 10, price: '60,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#2',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/2.jpg'),
            discount: { has: true, value: 30, price: '50,000' },
            rating: 5,
            liked: false
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/3.jpg'),
            discount: { has: true, value: 10, price: '40,000' },
            rating: 5,
            liked: true
        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/4.jpg'),
            discount: { has: true, value: '25', price: '50,000' },
            rating: 5,
            liked: true

        },
        {
            id: '#3',
            name: 'قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی',
            price: '57,900',
            region: 'tabriz',
            image: require('../../../images/discount/5.jpg'),
            discount: { has: true, value: '25', price: '40,000' },
            rating: 5,
            liked: false

        },
    ]);

    const [size, setSize] = useState('');



    return (
        <section className="discount">
            <Swiper
                className='swiper'
                slidesPerView={size}
                spaceBetween={16}
                onResize={() => { window.innerWidth > 1500 ? setSize(5.5) : setSize(window.innerWidth / 300) }}
                freeMode={true}
                navigation={true}
                modules={[FreeMode, Navigation]}
            >
                <SwiperSlide className="slide-first">
                    <h1>فروش فوق العاده</h1>
                    <BrandIcon />
                    <button>
                        <span>مشاهده همه</span>
                        <Icon icon="dashicons:arrow-right-alt2" color="black" />
                    </button>
                </SwiperSlide>


                {size ? samples.map((item, index) => {
                    return (
                        <SwiperSlide className="slide" key={index}>
                            <SlideData data={item} />
                        </SwiperSlide>
                    )
                }) : ''}

            </Swiper>
        </section>
    )
}

export default Discout
