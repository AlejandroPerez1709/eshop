
import Image1 from '../../assets/category/gaming.png';
import Image2 from '../../assets/category/vr.png';
import Image3 from '../../assets/category/speaker.png';
import { Button } from '../shared/Button';

export const Category2 = () => {

    return(
        <div className='py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* First Col */}
                    <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to to-gray-100 w/70 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className=''>
                            <div className='mb-4'>
                                <p className=' text-white '>Disfruta</p>
                                <p className='text-2xl font-semibold '>Con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Play Station 5</p>
                                <Button text={'Comprar'} bgColor={'bg-primary'} textColor={'text-white'}/>
                            </div>
                        </div>
                        <img src={Image1} alt="watch" className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-0 '/>
                    </div>
                    {/* Second Col */}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white '>Disfruta</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Oculus</p>
                                <Button text={'Comprar'} bgColor={'bg-white'} textColor={'text-brandGreen'}/>
                            </div>
                        </div>
                        <img src={Image2} alt="" className='w-[320px] absolute bottom-0'/>
                    </div>
                    {/* Thirth Col */}
                    <div className=' py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-white '>Disfruta</p>
                                <p className='text-2xl font-semibold mb-[2px]'>Con</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-60 mb-2'>Gadget</p>
                                <Button text={'Comprar'} bgColor={'bg-white'} textColor={'text-brandBlue'}/>
                            </div>
                        </div>
                        <img src={Image3} alt="watch" className='w-[200px] absolute right-0 bottom-0'/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}






