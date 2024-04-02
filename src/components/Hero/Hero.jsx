/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Slider from "react-slick";
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import { Button } from "../shared/Button";

const HeroData = [
    {
        id:1,
        img:Image1,
        subtitle:"Beats Solo",
        title: "Wireless",
        title2: "Audifonos",
        description:"Los audífonos inalámbricos ofrecen una experiencia auditiva liberadora y sin restricciones, gracias a su tecnología avanzada de conexión Bluetooth. ."
    },
    {
        id:2,
        img:Image2,
        subtitle:"Beats Solo",
        title: "Realidad",
        title2: "Virtual",
        description:"Sumérgete en un mundo de experiencias inmersivas con nuestras gafas virtuales de última generación."
    },
    {
        id:3,
        img:Image3,
        subtitle:"Beats Solo",
        title: "Huawei",
        title2: "Laptops",
        description:"Experimenta la potencia y la elegancia en un solo dispositivo con la MacBook. Este portátil de última generación combina un rendimiento excepcional con un diseño delgado y ligero."
    },
]

export const Hero = ({handleOrderPopup}) => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

    return(
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            HeroData.map(({id, img, subtitle,title, title2}) => (
                                <div key={id}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2">
                                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                            <h1 data-aos="zoom-out" data-aos-duration='500'  data-aos-once='true' className="text-2xl sm:text-6xl lg:text-2xl font-bold">{subtitle}</h1>
                                            <h1 data-aos="zoom-out" data-aos-duration='500'  data-aos-once='true' className="text-2xl sm:text-6xl lg:text-7xl font-bold">{title}</h1>
                                            <h1 data-aos="zoom-out" data-aos-duration='500'  data-aos-once='true' className="text-5xl uppercase text-white dark:text-white-5 sm:text-[80px] md:text[100px] xl:text-[150px] font-bold">{title2}</h1>
                                            <div onClick={handleOrderPopup} data-aos="zoom-out" data-aos-duration='500'  data-aos-once='true'>
                                                <Button text={'Compra Por Categoría'} bgColor={"bg-primary"} textColor={'text-white'} />
                                            </div>
                                        </div>
                                        <div className="order-1 sm:order-2">
                                            <div >
                                                <img src={img} alt={title} className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40" data-aos="zoom-out"   data-aos-once='true'/>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }
                    </Slider>   
                </div>
            </div>
        </div>
    )
}