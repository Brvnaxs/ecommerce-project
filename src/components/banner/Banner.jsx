import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination} from "swiper"
import banner1 from "../../assets/BAN1.jpg";
import banner2 from "../../assets/BAN2.jpg";
import banner3 from "../../assets/BAN3.jpg";
import 'swiper/css';
import "./banner.css";

export default function Banner(){
    return(
            <Swiper className="Banner" modules={[Autoplay, Pagination]} autoplay={{delay:5000}} pagination={{clickable:true}}>
                <SwiperSlide className="banner-itens">
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide className="banner-itens">
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide className="banner-itens">
                    <img src={banner3} alt="" />
                </SwiperSlide>
            </Swiper>
    )
}