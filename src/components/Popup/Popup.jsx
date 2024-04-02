/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IoCloseOutline } from "react-icons/io5";

export const Popup = ({orderPopup, handleOrderPopup}) => {

    return(
        <>
        {
            orderPopup && (
                <div>
            <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm ">
                <div className="rounded-xl w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 r">
                    {/* header Section */}
                    <div className=" flex items-center justify-between ">
                        <h1>Order Now</h1>
                        <div className="mb-2">
                            <IoCloseOutline className="text-2xl cursor-pointer" onClick={handleOrderPopup}/>
                        </div>
                    </div>
                    {/* Form Section */}
                    <div className="">
                        <input type="text" className="form-input my-2" placeholder="Name"/>
                        <input type="text" className="form-input my-2" placeholder="Adress"/>
                        <input type="email" className="form-input my-2" placeholder="Email"/>
                    </div>
                    <div className="text-center pt-2">
                        <button className="bg-primary w-1/2 text-white px-4 py-2 rounded-full hover:scale-105 duration">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
            ) 
        }
     </>   
    )
}