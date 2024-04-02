/* eslint-disable react/prop-types */

import { Button } from "../shared/Button"


export const ProductsCard = ({productsData}) => {

    
    return(
        <div className="mb-10"> 
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                {/* Card Section */}
                {
                    productsData.map(({id, img, price, title, aosDelay}) => (
                        <div key={id} className="group" data-aos="fade-up" data-aos-delay={aosDelay}>
                            <div className="relative " >
                                <img src={img} alt={title} className="h-[180px] w-[260px] object-cover rounded-md"/>
                                {/* Hover Button */}
                                <div className="hidden  absolute w-full h-full text-center top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:flex group-hover:backdrop-blur-sm justify-center items-center group-hover:duration-300">
                                    <Button text={'Add To Cart'} bgColor={'bg-primary'} textColor={'text-white'}/>
                                </div>
                            </div>
                            <div className="leading-7">
                                <h2 className="font-semibold">{title}</h2>
                                <p className="font-bold">${price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    )
}