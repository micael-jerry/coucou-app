import { AuthApi, Configuration, ConversationApi, HealthApi, MessageApi, UserApi } from '@/client';
import axios from 'axios';
import { getSession } from 'next-auth/react';

const configuration = new Configuration({
	basePath: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
});

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async (config) => {
	const session = await getSession();
	if (session?.user?.accessToken) {
		config.headers.Authorization = `Bearer ${session.user.accessToken}`;
	}
	return config;
});

export const apiClient = {
	authApi: new AuthApi(configuration, undefined, axiosInstance),
	conversationApi: new ConversationApi(configuration, undefined, axiosInstance),
	healthApi: new HealthApi(configuration, undefined, axiosInstance),
	messageApi: new MessageApi(configuration, undefined, axiosInstance),
	userApi: new UserApi(configuration, undefined, axiosInstance),
};
