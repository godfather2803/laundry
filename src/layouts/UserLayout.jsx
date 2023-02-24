import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const LABEL = {
	HOME_PAGE: 'Trang chủ',
	ORDER: 'Đặt lịch',
	SERVICE: 'Dịch vụ',
	LOGIN: 'Đăng nhập',
	HISTORY:'Lịch sử'
};

const UserLayout = ({ children, defaultSelectedKeys, breadCrumbs }) => {
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	let navigate = useNavigate();

	const renderBreadCrumbs = () => {
		return breadCrumbs.map((item) => (
			<Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
		));
	};

	return (
		<section className='layout'>
			<Layout>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						zIndex: 1,
						width: '100%',
					}}>
					<div className='header-content relative'>
						<div
							style={{
								float: 'left',
								width: 120,
								height: 31,
								margin: '16px 24px 16px 0',
								background: 'rgba(255, 255, 255, 0.2)',
							}}
						/>
						<Menu
							theme='dark'
							mode='horizontal'
							defaultSelectedKeys={defaultSelectedKeys}
							items={[
								{
									key: 'home',
									label: LABEL.HOME_PAGE,
								},
								{
									key: 'history',
									label: LABEL.HISTORY,
								},
								{
									key: 'order',
									label: LABEL.ORDER,
								},
							]}
							onClick={({ _, key, keyPath }) => {
								if (key === 'home') {
									navigate('/');
								} else {
									navigate(`/${key}`);
								}
							}}
						/>
						<div className='absolute right-0 top-0 '>
							<Button type='link' href='/login' className='text-white'>
								{LABEL.LOGIN}
							</Button>
						</div>
					</div>
				</Header>
				<Content
					className='site-layout'
					style={{
						padding: '0 50px',
					}}>
					<Breadcrumb
						style={{
							margin: '16px 0',
						}}>
						{renderBreadCrumbs()}
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: '100vh',
							background: colorBgContainer,
						}}>
						{children}
					</div>
				</Content>
			</Layout>
		</section>
	);
};

export default UserLayout;
