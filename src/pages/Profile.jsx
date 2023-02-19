import React from 'react';

import { Button, Form, Input, Divider } from 'antd';

const ProfilePage = () => {
	return (
		<section className='order-page'>
			<h2 className='text-xl font-semibold'>Đặt lịch hẹn</h2>
			<Divider />
			<Form
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				layout='vertical'
				style={{
					maxWidth: '600px',
				}}>
				<Form.Item label='Tên'>
					<Input placeholder='Nhập họ tên' value='Nguyễn Văn A' />
				</Form.Item>

				<Form.Item label='Số điện thoại'>
					<Input placeholder='Nhập sdt' value='0987222505' />
				</Form.Item>

				<Form.Item label='Địa chỉ'>
					<Input
						placeholder='Nhập địa chỉ'
						value='180 Hai Bà Trưng P. Đa Kao Q. 1 TP. HCM'
					/>
				</Form.Item>

				<Form.Item
					label='Email'
					name='email'
					rules={[
						{
							required: false,
							message: 'Hãy nhập lại mật khảu!',
						},
					]}>
					<Input placeholder='ex: youremail@gmail.com' />
				</Form.Item>

				<div className='flex justify-start'>
					<Button
						type='primary'
						className='border-0 bg-blue-500 font-semibold text-white'>
						Xác nhận
					</Button>
				</div>
			</Form>
		</section>
	);
};

export default ProfilePage;
