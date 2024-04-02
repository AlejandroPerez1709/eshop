
import Image1 from '../../assets/category/earphone.png';
import Image2 from '../../assets/category/watch.png';
import Image3 from '../../assets/category/macbook.png';
import { Button } from '../shared/Button';

export const Category = () => {

    return(
        <div className='py-8'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* First Col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400 '>Disfruta</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Audífonos</p>
                                <Button text={'Comprar'} bgColor={'bg-primary'} textColor={'text-white'}/>
                            </div>
                        </div>
                        <img src={Image1} alt="" className='w-[320px] absolute bottom-0'/>
                    </div>
                    {/* Second Col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br from-brandYellow to to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white '>Disfruta</p>
                                <p className='text-2xl font-semibold mb-[2px]'>con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Gadget</p>
                                <Button text={'Comprar'} bgColor={'bg-white'} textColor={'text-brandYellow'}/>
                            </div>
                        </div>
                        <img src={Image2} alt="watch" className='w-[320px] absolute -right-4 lg:top-[40px]'/>
                    </div>
                    {/* Trird Col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to to-primary/70 w/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className=''>
                            <div className='mb-4'>
                                <p className=' text-white '>Disfruta</p>
                                <p className='text-2xl font-semibold '>Con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Laptop</p>
                                <Button text={'Comprar'} bgColor={'bg-white'} textColor={'text-primary'}/>
                            </div>
                        </div>
                        <img src={Image3} alt="watch" className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0 '/>
                    </div>
                </div>
            </div>
        </div>
    )
}






