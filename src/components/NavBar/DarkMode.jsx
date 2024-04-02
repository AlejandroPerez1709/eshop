
import LightButton from '../../assets/website/light-mode-button.png'
import DarkButton from '../../assets/website/dark-mode-button.png'
import { useEffect, useState } from 'react'

export const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light');
    const element = document.documentElement;
   
    useEffect(() => {
        localStorage.setItem('theme', theme);

        if(theme === 'dark'){
            element.classList.remove('light')
            element.classList.add('dark')
        }else{
            element.classList.remove('dark')
            element.classList.add('light')
        }  
    })
    

    return(
        <div className='relative' onClick={() => setTheme(theme === 'dark'? 'light': 'dark' )}>
            <img src={LightButton} alt="light" className={`w-12 cursor-pointer absolute right-0 duration-300 transition-all delay-75 ${theme == 'dark'? 'opacity-0' : 'opacity-100'}`}
            />
            <img src={DarkButton} alt="dark" className={`w-12 cursor-pointer abslute right-0 duration-300 transition-all ${theme == 'light'? 'opacity-0' : 'opacity-100'}`}
            />
        </div>
    )
}