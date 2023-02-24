import React, { useState } from 'react';

import { Button, Form, Input, Divider, Select } from 'antd';

const LABEL = {
	REGISTER: 'Đăng ký',
	USERNAME: 'Số điện thoại',
	PASSWORD: 'Mật khẩu',
	RE_PASSWORD: 'Nhập lại mật khẩu',
	EMAIL: 'Email',
	ADDRESS: 'Địa chỉ',
	SPEC_ADDRESS: 'Số nhà',
	NAME: 'Họ và tên',

	LOGIN: 'Đăng nhập',
};

const renderCities = (cities = []) =>
	cities.map((c) => <Select.Option value={c.id}>{c.name}</Select.Option>);

const RegisterPage = () => {
	const [form] = Form.useForm();

	return (
		<section className='register-page'>
			<div className='relative min-h-screen bg-gray-200 pt-40 space-y-8'>
				<div className='text-center text-3xl font-semibold '>
					Welcome to iLaundry
				</div>
				<div className='min-w-lg absolute left-1/2 top-1/2 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-gray-200 bg-white p-4'>
					<h3 className='mb-4 text-center text-xl font-semibold'>
						{LABEL.REGISTER}
					</h3>
					<Form
						form={form}
						layout='vertical'
						initialValues={{ requiredMarkValue: true }}
						requiredMark={true}
						autoComplete='off'>
						<Form.Item
							label={LABEL.USERNAME}
							name='username'
							rules={[
								{
									required: true,
									message: 'Hãy nhập số điện thoại!',
								},
							]}>
							<Input />
						</Form.Item>

						<Form.Item
							label={LABEL.PASSWORD}
							name='password'
							rules={[
								{
									required: true,
									message: 'Hãy nhập mật khẩu!',
								},
							]}>
							<Input.Password />
						</Form.Item>

						<Form.Item
							label={LABEL.RE_PASSWORD}
							name='re-password'
							rules={[
								{
									required: true,
									message: 'Hãy nhập lại mật khảu!',
								},
							]}>
							<Input.Password />
						</Form.Item>

						<Divider />

						<Form.Item
							label={LABEL.EMAIL}
							name='email'
							rules={[
								{
									required: false,
									message: '',
								},
							]}>
							<Input placeholder='ex: youremail@gmail.com' />
						</Form.Item>

						<Form.Item label={LABEL.ADDRESS}>
							<Form.Item name='address' noStyle rules={[{ required: false }]}>
								<Input placeholder='Nhập địa chỉ' />
							</Form.Item>
						</Form.Item>

						{/* <Form.Item label={LABEL.ADDRESS}>
							<Input.Group compact>
								<Form.Item name='city' noStyle rules={[{ required: false }]}>
									<Select placeholder='Chọn tỉnh' className='w-1/2'>
										{renderCities(SUPPORTED_CITIES)}
									</Select>
								</Form.Item>
								<Form.Item
									name='province'
									noStyle
									rules={[{ required: false }]}>
									<Select placeholder='Quận / Huyện' className='w-1/2'>
										<Select.Option value='0'>Quận 1</Select.Option>
										<Select.Option value='0'>Quận 2</Select.Option>
									</Select>
								</Form.Item>
							</Input.Group>
						</Form.Item>
						<Form.Item label={LABEL.SPEC_ADDRESS}>
							<Form.Item name='address' noStyle rules={[{ required: false }]}>
								<Input placeholder='Tên đường, số nhà' />
							</Form.Item>
						</Form.Item> */}

						<Form.Item className='mb-0 mt-6'>
							<Button
								className='bg-blue-600 font-semibold'
								type='primary'
								block>
								{LABEL.REGISTER}
							</Button>
						</Form.Item>
						<div>
							<span>Đã có tài khoản ? </span>
							<Button
								className='p-0 text-right font-semibold'
								href='/login'
								type='link'>
								{LABEL.LOGIN}
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default RegisterPage;
