/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const Banner = ({data}) => {

    const {discount, title, title2, title3, title4, bgColor, date, image} = data
   
    return(
        <div className="min-h-[400px] flex justify-center items-center py-12">
           <div className="container">
                <div style={{backgroundColor: bgColor}}  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
                    {/* First Col */}
                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right" className="text-sm">{discount}</p>
                        <h1 data-aos="zoom-out"  className="uppercase text-4xl lg:text-7xl font-bold">{title}</h1>
                        <p data-aos="fade-up" className="text-sm">{date}</p>
                    </div>
                    {/* Second Col */}
                    <div className="h-full flex justify-center items-center">
                        <img data-aos="zoom-in" src={image} alt="headphone" className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover"/>
                    </div>
                    {/* Thirth Col */}
                    <div className="flex flex-col justify-center items-center gap-4 p-6 sm:p-8">
                        <p data-aos="zoom-out" className="font-bold text-xl ">{title2}</p>
                        <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">{title3}</p>
                        <p data-aos="fade-up" className="text-sm tracking-wide leading-5 ">{title4}</p>
                        <button data-aos="fade-up" data-aos-offset='0' style={{color: bgColor}} className="bg-white py-2 px-4 rounded-full">Compra Ahora</button>
                    </div>
                </div>
           </div>
        </div>
    )
}