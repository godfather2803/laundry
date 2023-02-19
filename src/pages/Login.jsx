import React, { useState } from 'react';

import { Button, Form, Input } from 'antd';

const LABEL = {
	LOGIN: 'Đăng nhập',
	USERNAME: 'Tài khoản',
	PASSWORD: 'Mật khẩu',
	REGISTER: 'Đăng ký ngay',
	FORGOT_PASSWORD: 'Quên mật khẩu ?',
};

const LoginPage = () => {
	const [form] = Form.useForm();

	return (
		<section className='login-page'>
			<div className='pt-1/2 relative min-h-screen bg-gray-200 pt-96'>
				<div className='text-center text-3xl font-semibold'>
					Welcome to iLaundry
				</div>
				<div className='min-w-lg absolute left-1/2 top-1/2 w-96 max-w-full -translate-x-1/2 -translate-y-1/2 rounded-lg border-2 border-gray-200 bg-white p-4'>
					<h3 className='mb-4 text-center text-xl font-semibold'>
						{LABEL.LOGIN}
					</h3>
					<Form
						form={form}
						layout='vertical'
						initialValues={{ requiredMarkValue: 'optional' }}
						requiredMark={'optional'}
						autoComplete='off'>
						<Form.Item
							label={LABEL.USERNAME}
							name='username'
							rules={[
								{
									required: true,
									message: 'Please input your username!',
								},
							]}>
							<Input />
						</Form.Item>

						<Form.Item
							label={LABEL.PASSWORD}
							className='mb-0'
							name='password'
							rules={[
								{
									required: true,
									message: 'Please input your password!',
								},
							]}>
							<Input.Password />
						</Form.Item>
						<Button className='p-0 text-right font-normal' type='link'>
							{LABEL.FORGOT_PASSWORD}
						</Button>

						<Form.Item className='mb-0 mt-6'>
							<Button
								className='bg-blue-600 font-semibold'
								type='primary'
								href='/'
								block>
								{LABEL.LOGIN}
							</Button>
						</Form.Item>
						<Button
							className='p-0 text-right font-semibold'
							href='/register'
							type='link'>
							{LABEL.REGISTER}
						</Button>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
