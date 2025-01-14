/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const Button = ({text, bgColor, textColor, handler = () => {}}) => {


    return(
        <button className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>
            {text}
        </button>
    )
}