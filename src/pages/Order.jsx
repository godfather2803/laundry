import React, { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import {
	Button,
	Cascader,
	Checkbox,
	DatePicker,
	Form,
	Input,
	InputNumber,
	Radio,
	Select,
	Switch,
	TreeSelect,
	Upload,
	Divider,
	Card,
	Col,
	Row,
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const { TextArea } = Input;

const DATE_FORMAT = 'DD/MM/YYYY';

const OrderPage = () => {
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

				<Form.Item label='Địa chỉ'>
					<Input
						placeholder='Nhập địa chỉ'
						value='180 Hai Bà Trưng P. Đa Kao Q. 1 TP. HCM'
					/>
				</Form.Item>

				<Form.Item label='Số điện thoại'>
					<Input placeholder='Nhập sdt' value='0987222505' />
				</Form.Item>

				<Form.Item label='Ngày lấy'>
					<DatePicker
						format={DATE_FORMAT}
						defaultValue={dayjs('19/02/2023', DATE_FORMAT)}
					/>
				</Form.Item>

				<Form.Item label='Khối lượng ước tính (kg)'>
					<InputNumber placeholder='vd: 7' />
				</Form.Item>

				<Form.Item label='Dịch vụ'>
					<div className='flex'>
						<Card className='mr-4 w-40' title='Combo 1' hoverable>
							Giặt, sấy
						</Card>

						<Card className='w-40' title='Combo 2' hoverable>
							Giặt, sấy, ủi
						</Card>
					</div>
				</Form.Item>

				<Form.Item label='Ghi chú'>
					<TextArea rows={3} />
				</Form.Item>
				<Form.Item label='Thành tiền'>
					<span className='font-semibold'>129.000</span>
				</Form.Item>
				<div className='flex justify-start'>
					<Button
						type='primary'
						className='border-0 bg-blue-500 font-semibold text-white'>
						Đăt lịch
					</Button>
				</div>
			</Form>
		</section>
	);
};

export default OrderPage;
