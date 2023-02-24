import React from 'react';

import { Card, Space } from 'antd';

const LABEL = {
	HOME_PAGE: 'Trang chủ',
	ORDER: 'Đặt lịch',
	SERVICE: 'Dịch vụ',
	LOGIN: 'Đăng nhập',
};

const HomePage = () => {
	return (
		<section className='home-page'>
			<h3 className='mb-4 text-xl font-semibold'>Đơn hàng của bạn</h3>
			<div>
				<Card
					title={
						<p>
							17/02/2023 - <span className='text-green-500'>Đang giặt sấy</span>
						</p>
					}
					extra={
						<a className='text-blue-500 ' href='#'>
							Xem
						</a>
					}
					headStyle={{
						padding: '0 12px',
					}}
					bodyStyle={{
						padding: '12px',
					}}
					style={{
						width: 300,
					}}>
					<p className='font-semibold'>Thành tiền</p>
					<p className='mb-2'>223.000</p>

					<p className='font-semibold'>Khối lượng</p>
					<p className='mb-2'>12 kg</p>

					<p className='font-semibold'>Ngày giao dự kiến</p>
					<p className='mb-2'>20/02/2023</p>

					<p className='font-semibold'>Chưa thanh toán</p>
				</Card>
			</div>
		</section>
	);
};

export default HomePage;
