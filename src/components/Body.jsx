import React from 'react'
import { IoInformationCircleOutline } from "react-icons/io5";
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png";
import "../styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Body = () => {
    return (
        <>

            <div className='w-[80%] m-auto'>
                <div className='mt-24 w-full relative overflow-x-scroll no-scrollbar py-20 bottom-12'>
                    <table className='border-collapse border-gray-500 font-light w-full'>
                        <tr>
                            <td className='border'> </td>
                            <td className='td'>
                                <p className='text-2xl font-bold'>VIP</p>
                                <p className='text-xs  mt-2 mb-4'>First Priority Support</p>
                                <div className='h-[3px] w-10 bg-gray-200 m-auto mt-8'></div>
                                <div className='w-[50%] m-auto flex flex-row mt-7'>
                                    <div className='text-4xl font-bold'>500</div>
                                    <div>
                                        <p className='text-xs mt-1'>py6.<br />/month</p>

                                    </div>
                                </div>
                            </td>
                            <td className='td bg-gray-100'>
                                <p className='text-[#AA4DC7] border shadow-md font-semibold absolute top-16 bg-white'>MOST POPULAR</p>
                                <div >

                                    <p className='text-2xl font-bold items-center'>Unlimited</p>
                                    <p className='text-xs  mt-2 mb-4 '>Entrepreneurs & <br />Freelancers</p>
                                    <div className='h-[3px] w-10 bg-gray-200 m-auto mt-5'></div>
                                    <div className='w-[50%] m-auto flex flex-row mt-7'>
                                        <div className='text-4xl font-bold'>250</div>
                                        <div>
                                            <p className='text-xs mt-1'>py6.<br />/month</p>

                                        </div>

                                    </div>
                                </div>

                            </td>
                            <td className='td'>
                                <p className='text-2xl font-bold items-center'>Combo</p>
                                <p className='text-xs mt-2 mb-4'>For personal use</p >
                                <div className='h-[3px] w-10 bg-gray-200 m-auto mt-8'></div>
                                <div className='w-[50%] m-auto flex flex-row mt-7'>
                                    <div className='text-4xl font-bold'>150</div>
                                    <div>
                                        <p className='text-xs mt-1'>py6.<br />/month</p>

                                    </div>
                                </div>
                            </td>
                            <td className='td'>
                                <p className='text-2xl font-bold items-center'>Connect Domain</p>
                                <p className='text-xs mt-2'>Most Basic</p>
                                <div className='text-xs text-gray-500 mt-7'><IoInformationCircleOutline className='inline-block' />This plan displays wix ads</div>
                                <div className='w-[50%] m-auto flex flex-row mt-5'>
                                    <div className='text-4xl font-bold'>90</div>
                                    <div>
                                        <p className='text-xs mt-1'>py6.<br />/month</p>

                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>

                            <td className="td1">
                                
                                Custom domain
                                <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
                            </td>

                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                        </tr>
                        <tr>
                            <td className='td1'>
                                Free domain for 1 year
                                <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>

                            </td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div>
                            </td>
                        </tr>
                        <tr>
                            <td className='td1'>
                                Band Width
                                <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>

                            </td>
                            <td className='td2'>Unlimited</td>
                            <td className='td2 bg-gray-100'>Unlimited</td>
                            <td className='td2'>2GB</td>
                            <td className='td2'>1GB</td>
                        </tr>
                        <tr>
                            <td className='td1'>Storage space
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'>35 GB</td>
                            <td className='td2 bg-gray-100'>10 GB</td>
                            <td className='td2'>3 GB</td>
                            <td className='td2'>500 MB</td>
                        </tr>
                        <tr>
                            <td className='td1'>Video hours
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'>5 hours</td>
                            <td className='td2 bg-gray-100'>1 hour</td>
                            <td className='td2'>30 minutes</td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                        </tr>
                        <tr>
                            <td className='td1'>Yandex voucher
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                        </tr>
                        <tr>
                            <td className='td1'>
                                <div>
                                    Site Booster app
                                    <span className='block text-[1rem] font-light text-gray-400'>Free for 1 year</span>
                                </div>
                                <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500 bottom-8'/>

                              
                            </td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                        </tr>
                        <tr>
                            <td className='td1'>
                                <div>
                                    Visitor Analytics App
                                    <span className='block text-[1rem] font-light text-gray-400'>Free for 1 year</span>
                                    <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500 bottom-8'/>

                                </div>
                                <div>

                                </div>
                            </td>

                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><FontAwesomeIcon icon={faCheck} className='m-auto' /><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                        </tr>
                        <tr>
                            <td className='td1'>Professional logo
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>

                        </tr>
                        <tr>
                            <td className='td1'>Social media logo files
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'><FontAwesomeIcon icon={faCheck} className='m-auto' /></td>
                            <td className='td2 bg-gray-100'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>
                            <td className='td2'><div className='h-[2px] w-4 bg-gray-200 m-auto'></div></td>

                        </tr>
                        <tr>
                            <td className='td1'>Customer care
                            <IoInformationCircleOutline className='inline-block absolute right-3 text-xl text-gray-500'/>
</td>
                            <td className='td2'>Priority customer care</td>
                            <td className='td2 bg-gray-100'>24/7 customer care</td>
                            <td className='td2'>24/7 customer care</td>
                            <td className='td2'>24/7 customer care</td>
                        </tr>
                    </table>

                </div>

                <div className='m-auto bg-[#F3F4FE] font-light'>
                    <div className='w-[90%] m-auto p-10'>
                        <p className='text-3xl font-bold'>Business & eCommerce plans</p>
                        <p className='text-black text-[1em] mt-3 mb-3'>Grow and manage your online business with a custom storefront, catalog and order management, <br />shipping and taxes, integrated sales chamnnels and more</p>
                        <p className='text-xl text-[#6EACE1] mt-4 font-medium'>See Business Plans <FontAwesomeIcon icon={faArrowRight} className='text-xl font-normal ml-2 mt-2' /></p>
                    </div>

                </div>
                <div className='font-light text-[15px] text-gray-500 mt-12'>
                    Displayes prices are for yealry subscribers, paid in full at the time of purchase. Prices do not include applicable taxes, which are determined according to your billing address. The final price can be seen on the purchase page, before payment is completed.
                </div>
                <div className='h-[2px] bg-gray-200 mt-10'></div>

                {/* Payment details */}

                <div className='flex flex-row pt-8 justify-between mb-10' id='three'>
                    <div>
                        <p className='text-[14px]'>ACCEPTED PAYMENT METHODS</p>
                        <img src={image1} alt='one' className='max-w-56 mt-1' />
                    </div>
                    <div className='h-[50px] w-[2px] bg-gray-200 m-auto' id="lines"></div>

                    <div className='flex flex-row'>
                        <div className='mr-3'>
                            <img src={image2} alt='two' className='max-w-14 relative bottom-3' />

                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[14px]'>MONEY BACK GUARANTEE</p>
                            <p className='font-light text-xs mt-2'>Try Wix for 14 days and if you're not 100% <br />satisfied. get your money back.</p>

                        </div>
                    </div>
                    <div className='h-[50px] w-[2px] bg-gray-200 m-auto ' id="lines"></div>

                    <div className='flex flex-row'>
                        <div className='mr-3'>
                            <img src={image3} alt='three' className='max-w-14 relative bottom-3' />

                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[14px]'>SSL SECURE PAYMENT</p>
                            <p className='font-light text-xs mt-2'>Your information is protected by 256- bit SSL<br /> encryption.</p>

                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Body;
