import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import UserLayout from './layouts/UserLayout';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import HistoryPage from './pages/History';
import OrderPage from './pages/Order';
import Profile from './pages/Profile';

const router = createBrowserRouter([
	{
		path: '/history',
		element: (
			<UserLayout defaultSelectedKeys={['history']} breadCrumbs={['Trang chủ', 'Lịch sử']}>
				<HistoryPage />
			</UserLayout>
		),
	},
	{
		path: '/',
		element: (
			<UserLayout defaultSelectedKeys={['home']} breadCrumbs={['Trang chủ']}>
				<HomePage />
			</UserLayout>
		),
	},
	{
		path: '/order',
		element: (
			<UserLayout
				defaultSelectedKeys={['order']}
				breadCrumbs={['Trang chủ', 'Đặt lịch']}>
				<OrderPage />
			</UserLayout>
		),
	},
	{
		path: '/profile',
		element: (
			<UserLayout
				defaultSelectedKeys={[]}
				breadCrumbs={['Thông tin tài khoản']}>
				<Profile />
			</UserLayout>
		),
	},
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/register',
		element: <RegisterPage />,
	},
	{
		path: '/forgot-password',
		element: <>Forgot password</>,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
