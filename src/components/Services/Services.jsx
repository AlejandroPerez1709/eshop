import {FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa"

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary "/>,
        title: "Envió Gratis ",
        description: "Envió gratis en todas las compras",
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary "/>,
        title: "Garantía de Satisfacción ",
        description: "30 días o la devolución de tu dinero ",
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary "/>,
        title: "Compra Segura",
        description: "Todas las compras son seguras",
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary "/>,
        title: "Soporte Online 24/7",
        description: "Asesoría técnica 24/7",
    }
]

export const Services = () => {

    return(
        <div>
            <div className="container my-14 md:my-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
                    {
                        ServiceData.map(({id, icon, title, description }) => (
                            <div key={id} className="flex flex-col items-start sm:flex-row  ">
                                {icon}
                                <div className="ml-4">
                                    <h1 className="lg:text-xl font-bold">{title}</h1>
                                    <p className="text-gray-400 text-sm ">{description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}