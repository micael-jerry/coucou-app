export const ROUTES = {
	HOME: '/',
	LOGIN: '/auth/login',
	SIGNUP: '/auth/signup',
	COUCOU: '/coucou',
	COUCOU_CONVERSATION: (id: string) => `/coucou/${id}`,
	FORGOT_PASSWORD: '/auth/forgot-password', // NOSONAR
	PROFILE_EDIT: '/profile/edit',
	SETTINGS: '/profile/settings',
};
