import React from 'react';
import { PhoneOutlined,SkinOutlined,RocketOutlined,SafetyCertificateOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const LABEL = {
	HOME_PAGE: 'Trang chủ',
	ORDER: 'Đặt lịch',
	SERVICE: 'Dịch vụ',
	LOGIN: 'Đăng nhập',
};

const HomePage = () => {
	return (
        <div>
            <section>
                <div className='flex mx-auto relative'>
                    <div className='w-full flex'>
                        <div className='flex w-full min-h-[1px] relative'>
                            <div className='w-full flex'>
                                <div className='p-0 flex flex-wrap w-full items-start relative'>
                                    <section className='my-0 p-[1%_5%_0%_4%] w-full'>
                                        <div className='mx-auto flex relative'>
                                            <div className='w-full flex'>
                                                <div className='flex w-full min-h-[1px] relative'>
                                                    <div className='flex w-full'>
                                                        <div className='p-[10px] flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 text-left w-full'>
                                                                <div className='p-0 text-left'>
                                                                    <p className='text-[19px] text-[#7E8E74] font-[400] mb-0'>
                                                                        Quy trình và công nghệ hiện đại đảm bảo thời gian giao nhận hàng
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='mb-0 text-left w-full'>
                                                                <div className='p-0 text-left'>
                                                                    <h2 className='text-[30px] text-[#0c0c0c] font-[600] mb-0 leading-[1.2em]'>
                                                                        Dịch Vụ  <b className=' text-[#89b92e] font-[600]' >Giặt Ủi Laundry</b>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section  className='p-[1%_5%_0%_5%] w-full'>
                                        <div className='mx-auto flex relative flex-wrap'>
                                            <div className='w-full flex flex-wrap'>
                                                <div className='w-full md:w-[33.13%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative'>
                                                        <div className='p-[10px_0px_0px_0px] md:p-[0%_6%_0%_0%] flex flex-wrap w-full items-start'>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform text-center'>
                                                                    <div className='text-center'>
                                                                        <a href="/order" className='!w-full inline-block'>
							                                                <img 
                                                                                decoding="async" 
                                                                                width="2308" 
                                                                                height="1536" 
                                                                                src="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg" 
                                                                                className="w-full h-[200px] object-cover rounded-[3px_3px_3px_3px]" 
                                                                                alt="" loading="lazy" 
                                                                                srcset="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg 2308w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-300x200.jpg 300w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1024x681.jpg 1024w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-768x511.jpg 768w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1536x1022.jpg 1536w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-2048x1363.jpg 2048w" 
                                                                                sizes="(max-width: 2308px) 100vw, 2308px"
                                                                            />	
                                                                            </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[15px_0px_5px_0px] text-left'>
                                                                    <h2 className='text-[#0c0c0c] font-[600] font-[Saira] text-[21px] leading-[1.2em]'>
                                                                        <Link to="/order">Dịch Vụ Giặt Ủi</Link>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[0px_0px_0px_0px] text-left text-[#54595F] text-[17px] font-[400]'>
                                                                    <p className='text-[#54595F] text-[17px] font-[400] leading-[1.2em]'>
                                                                    Chuyên nhận giặt ủi tất cả các loại quần, áo, chăn, ga với máy móc hiện đại, cùng quy trình chuẩn.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full md:w-[33.1%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative'>
                                                        <div className='p-[10px_0px_0px_0px] md:p-[0%_6%_0%_0%] flex flex-wrap w-full items-start'>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform text-center'>
                                                                    <div className='text-center'>
                                                                        <Link to="/order" className='!w-full inline-block'>
							                                                <img 
                                                                                decoding="async" 
                                                                                width="2308" 
                                                                                height="1536" 
                                                                                src="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg" 
                                                                                className="w-full h-[200px] object-cover rounded-[3px_3px_3px_3px]" 
                                                                                alt="" loading="lazy" 
                                                                                srcset="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg 2308w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-300x200.jpg 300w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1024x681.jpg 1024w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-768x511.jpg 768w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1536x1022.jpg 1536w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-2048x1363.jpg 2048w" 
                                                                                sizes="(max-width: 2308px) 100vw, 2308px"
                                                                            />	
                                                                            </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[15px_0px_5px_0px] text-left'>
                                                                    <h2 className='text-[#0c0c0c] font-[600] font-[Saira] text-[21px] leading-[1.2em]'>
                                                                        <Link to="/order">Dịch Vụ Giặt Sấy</Link>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[0px_0px_0px_0px] text-left text-[#54595F] text-[17px] font-[400]'>
                                                                    <p className='text-[#54595F] text-[17px] font-[400] leading-[1.2em]'>
                                                                    Chuyên nhận giặt ủi tất cả các loại quần, áo, chăn, ga với máy móc hiện đại, cùng quy trình chuẩn.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full md:w-[33.1%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative'>
                                                        <div className='p-[10px_0px_0px_0px] md:p-[0%_6%_0%_0%] flex flex-wrap w-full items-start'>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform text-center'>
                                                                    <div className='text-center'>
                                                                        <Link to="/order" className='!w-full inline-block'>
							                                                <img 
                                                                                decoding="async" 
                                                                                width="2308" 
                                                                                height="1536" 
                                                                                src="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg" 
                                                                                className="w-full h-[200px] object-cover rounded-[3px_3px_3px_3px]" 
                                                                                alt="" loading="lazy" 
                                                                                srcset="https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b.jpg 2308w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-300x200.jpg 300w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1024x681.jpg 1024w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-768x511.jpg 768w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-1536x1022.jpg 1536w, https://ttlaundry.com/wp-content/uploads/2bb6e0ddcee97232b2ea8a521a724e2b-2048x1363.jpg 2048w" 
                                                                                sizes="(max-width: 2308px) 100vw, 2308px"
                                                                            />	
                                                                            </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[15px_0px_5px_0px] text-left'>
                                                                    <h2 className='text-[#0c0c0c] font-[600] font-[Saira] text-[21px] leading-[1.2em]'>
                                                                        <Link to="/order">Dịch Vụ Giặt Hấp</Link>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full mb-0 text-center relative'>
                                                                <div className='transition-transform p-[0px_0px_0px_0px] text-left text-[#54595F] text-[17px] font-[400]'>
                                                                    <p className='text-[#54595F] text-[17px] font-[400] leading-[1.2em]'>
                                                                    Chuyên nhận giặt ủi tất cả các loại quần, áo, chăn, ga với máy móc hiện đại, cùng quy trình chuẩn.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex mx-auto relative'>
                    <div className='w-full flex'>
                        <div className='flex w-full min-h-[1px] relative'>
                            <div className='w-full flex'>
                                <div className='p-0 flex flex-wrap w-full items-start relative'>
                                    <section className='my-0 p-[1%_5%_0%_4%] w-full'>
                                        <div className='mx-auto flex relative'>
                                            <div className='w-full flex'>
                                                <div className='flex w-full min-h-[1px] relative'>
                                                    <div className='flex w-full'>
                                                        <div className='p-[10px] flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 text-left w-full'>
                                                                <div className='p-0 text-left'>
                                                                    <p className='text-[19px] text-[#7E8E74] font-[400] mb-0'>
                                                                        Quy trình sử dụng dịch giặt ủi vụ đơn giản
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className='mb-0 text-left w-full'>
                                                                <div className='p-0 text-left'>
                                                                    <h2 className='text-[30px] text-[#0c0c0c] font-[600] mb-0 leading-[1.2em]'>
                                                                        4 Bước Dùng Dịch Vụ
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section  className='p-[1%_5%_0%_5%] w-full'>
                                        <div className='mx-auto flex relative flex-wrap'>
                                            <div className='w-full flex flex-wrap'>
                                                <div className='w-full md:w-[25%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative bg-[#D0F38D] m-[10px_10px_10px_0px] rounded-[10px_10px_10px_10px]'>
                                                        <div className='p-[10px] justify-center flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 w-full relative'>
                                                                <div className='m-[-25px_0px_0px_0px] transition-transform'>
                                                                    <div className='text-left'>
                                                                        <PhoneOutlined className='bg-[#FF8405] text-[25px] rounded-[5px_5px_5px_5px] p-[0.5em] text-[#fff] fill-[#fff]'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-center mb-0 w-full'>
                                                                <div className='text-center'>
                                                                    <h2 className='text-[#FFFFFF] text-[42px] font-[500]'>01</h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                <div className='p-[10px_0px_0px_0px] transition-transform' >
                                                                    <div className='w-full text-center'>
                                                                        <h3 className='mb-[5px] text-[#0c0c0c] text-[20px] leading-[1.3em] font-[600]'>Thu Gom Quần Áo</h3>
                                                                        <p className='text-[17px] leading-[1.5em] font-[400] text-[#7A7A7A]'>
                                                                            <span className='text-start whitespace-normal'>Nhận thông tin khách hàng và tiến hành thu gom quần áo</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full md:w-[25%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative m-[10px_10px_10px_0px] rounded-[10px_10px_10px_10px] border-solid border-[1px] border-[#E1E1E1]'>
                                                        <div className='p-[10px] justify-center flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 w-full relative'>
                                                                <div className='m-[-25px_0px_0px_0px] transition-transform'>
                                                                    <div className='text-left'>
                                                                        <SkinOutlined className='bg-[#FF8405] text-[25px] rounded-[5px_5px_5px_5px] p-[0.5em] text-[#fff] fill-[#fff]'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-center mb-0 w-full'>
                                                                <div className='text-center'>
                                                                    <h2 className='text-[#050505] text-[42px] font-[500]'>02</h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                <div className='p-[10px_0px_0px_0px] transition-transform' >
                                                                    <div className='w-full text-center'>
                                                                        <h3 className='mb-[5px] text-[#0c0c0c] text-[20px] leading-[1.3em] font-[600]'>Tiến Hành Giặt Sấy/Hấp</h3>
                                                                        <p className='text-[17px] leading-[1.5em] font-[400] text-[#7A7A7A]'>
                                                                            <span className='text-start whitespace-normal'>Tiếp nhận quần áo và giặt bằng hoá chất chuyên dụng</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full md:w-[25%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative m-[10px_10px_10px_0px] rounded-[10px_10px_10px_10px] border-solid border-[1px] border-[#E1E1E1]'>
                                                        <div className='p-[10px] justify-center flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 w-full relative'>
                                                                <div className='m-[-25px_0px_0px_0px] transition-transform'>
                                                                    <div className='text-left'>
                                                                        <SafetyCertificateOutlined className='bg-[#FF8405] text-[25px] rounded-[5px_5px_5px_5px] p-[0.5em] text-[#fff] fill-[#fff]'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-center mb-0 w-full'>
                                                                <div className='text-center'>
                                                                    <h2 className='text-[#050505] text-[42px] font-[500]'>03</h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                <div className='p-[10px_0px_0px_0px] transition-transform' >
                                                                    <div className='w-full text-center'>
                                                                        <h3 className='mb-[5px] text-[#0c0c0c] text-[20px] leading-[1.3em] font-[600]'>Sấy Khô, Đóng Gói</h3>
                                                                        <p className='text-[17px] leading-[1.5em] font-[400] text-[#7A7A7A]'>
                                                                            <span className='text-start whitespace-normal'>Tiến hành sấy khô và sắp xếp quần áo vào thùng cẩn thận</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='w-full md:w-[25%] min-h-[1px] flex'>
                                                    <div className='w-full flex relative m-[10px_10px_10px_0px] rounded-[10px_10px_10px_10px] border-solid border-[1px] border-[#E1E1E1]'>
                                                        <div className='p-[10px] justify-center flex flex-wrap w-full items-start'>
                                                            <div className='mb-0 w-full relative'>
                                                                <div className='m-[-25px_0px_0px_0px] transition-transform'>
                                                                    <div className='text-left'>
                                                                        <RocketOutlined className='bg-[#FF8405] text-[25px] rounded-[5px_5px_5px_5px] p-[0.5em] text-[#fff] fill-[#fff]'/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='text-center mb-0 w-full'>
                                                                <div className='text-center'>
                                                                    <h2 className='text-[#050505] text-[42px] font-[500]'>04</h2>
                                                                </div>
                                                            </div>
                                                            <div className='w-full'>
                                                                <div className='p-[10px_0px_0px_0px] transition-transform' >
                                                                    <div className='w-full text-center'>
                                                                        <h3 className='mb-[5px] text-[#0c0c0c] text-[20px] leading-[1.3em] font-[600]'>Kiểm Tra Và Giao Hàng</h3>
                                                                        <p className='text-[17px] leading-[1.5em] font-[400] text-[#7A7A7A]'>
                                                                            <span className='text-start whitespace-normal'>Kiểm tra kỹ và giao quần áo đến tận nhà bạn</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
	);
};

export default HomePage;
