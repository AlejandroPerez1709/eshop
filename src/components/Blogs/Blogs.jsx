/* eslint-disable no-unused-vars */
import { Heading } from "../shared/Heading"
import Img1 from '../../assets/blogs/blog-1.jpg'
import Img2 from '../../assets/blogs/blog-2.jpg'
import Img3 from '../../assets/blogs/blog-3.jpg'


const BlogData = [
    {
        id:1,
        title:  'Como escoger el perfecto Smart Watch ',
        subtitle: 'El smartwatch es un dispositivo portátil innovador que combina las funcionalidades de un reloj tradicional con las capacidades de un dispositivo electrónico inteligente ',
        published: 'Enero 20, 2024 por Alex Ram',
        image: Img1,
        aos: '0'
    },
    {
        id:2,
        title:  'Como escoger el Gadget Perfect',
        subtitle: 'Un gadget es un pequeño dispositivo electrónico diseñado para realizar una función específica de manera práctica y conveniente',
        published: 'Enero 30, 2024 por Alex Ram',
        image: Img2,
        aos: '300'
    },
    {
        id:3,
        title:  'Como escoger el VR headset Perfecto',
        subtitle: 'El VR headset, abreviatura de "Virtual Reality headset" o casco de realidad virtual, es un dispositivo tecnológico diseñado para sumergir al usuario en experiencias de realidad virtual',
        published: 'Febrero 24, 2024 por Alex Ram',
        image: Img3,
        aos: '600'
    }
]

export const Blogs = () => {

    return(
        <div className="my-12">   
            <div className="container">
                {/* Header Section */}
                <Heading title='Noticias Recientes' subtitle='Explora Nuestro Blog'/>
                {/* Body Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-7">
                    {/* blog Card */}
                    {
                        BlogData.map(({id, title, subtitle, image, published,aos }) => (
                            <div key={id} className="bg-white dark:bg-gray-900" data-aos='zoom-in' data-aos-delay={aos}>
                                <div className="overflow-hidden rounded-2xl mb-2">
                                    <img src={image} alt={id} className="w-full h-[220px] object-cover rounded-2xl hover:scale-125 duration-500"/>
                                </div>
                                <div className="space-y-2 pb-5">
                                    <p className="px-4 text-xs text-gray-500 ">{published}</p>
                                    <h2 className="font-bold line-clamp-1 text-center">{title}</h2>
                                    <p className="px-4 text-sm text-gray-600 dark:text-gray-400 line-clamp-2 ">{subtitle}</p>
                                </div >
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}