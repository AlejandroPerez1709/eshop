import { CiLocationArrow1 } from "react-icons/ci"
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Links = [
    {
        id:1,
        title: 'Inicio',
        link: '/#',
    },
    {
        id:2,
        title: 'Acerca',
        link: '/#about',
    },
    {
        id:3,
        title: 'Contacto',
        link: '/#contact',
    },
    {
        id:4,
        title: 'Blog',
        link: '/#blog',
    },
]

const footerLinks = [
    {
        id:1,
        title: 'Inicio',
        link: '/#',
    },
    {
        id:2,
        title: 'Acerca',
        link: '/#about',
    },
    {
        id:3,
        title: 'Contacto',
        link: '/#contact',
    },
    {
        id:4,
        title: 'Blog',
        link: '/#blog',
    },
]


export const Footer = () => {

    return(
        <div className="dark:bg-gray-950" data-aos='zoom-in'>
            <div className="container h-[350px] pt-10">
                <div className="grid md:grid-cols-3">
                    {/* Company Details */}
                    <div >
                        <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Eshop</a>
                        <p className="text-sm text-gray-600 dark:text-white/60 lg:pr-24 pt-3">Explora nuestro extenso catálogo que abarca desde tecnología de vanguardia hasta moda de última tendencia, pasando por productos para el hogar y artículos de estilo de vida</p>
                        <p className="text-gray-500 mt-4 dark:text-white/70">Hecho Con ❤ Por Alejandro Pérez</p>
                        <a href="#" className="mt-4 inline-block bg-primary/90 text-white py-2 px-4 rounded-full text-sm ">Visita Nuestro Canal</a>
                    </div>
                    {/* footer Links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-11 px-4">
                            <h1 className="text-xl font-semibold mb-4 sm:text-left "> Links Importantes</h1>
                            <ul className="space-y-3">
                                {
                                    footerLinks.map(({id, title, link}) => (
                                        <li key={id}>
                                            <a href={link} className="text-gray-600 hover:text-black duration-300 dark:hover:text-white">{title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Second Col */}
                        <div className="py-11 px-4">
                            <h1 className="text-xl font-semibold mb-4 sm:text-left "> Links Instantáneos </h1>
                            <ul className="space-y-3">
                                {
                                    Links.map(({id, title, link}) => (                                
                                        <li key={id}>
                                            <a href={link} className="text-gray-600 hover:text-black duration-300 dark:hover:text-white">{title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* company Adress */}
                        <div className="py-12 px-4 col-span-2 sm:col-auto">
                            <div>
                                 <h1 className="text-xl font-semibold mb-4 sm:text-left ">Dirección</h1>
                                <div className="flex items-center gap-3 mb-4">
                                    <CiLocationArrow1 />
                                    <div className="text-sm">
                                        <p>Ecatepec, Edo. Mex</p>
                                        <p>México</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 ">
                                    <MdPhoneInTalk />
                                    <p>55 83 20 02 05</p>
                                </div>
                                <div className="flex items-center gap-4 mt-3">
                                    <MdOutlineMarkEmailRead />
                                    <p className="text-sm">alejandropera78@gmail.com</p>
                                </div>
                                <div className="flex gap-7 items-center  mt-4">
                                    <BsFacebook className="text-3xl hover:text-primary duration-300"/>
                                    <CiInstagram className="text-3xl hover:text-primary duration-300"/>
                                    <CiLinkedin className="text-3xl hover:text-primary duration-300"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}