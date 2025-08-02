import { AuthApi, Configuration } from '@/client';

let configuration = new Configuration({
	basePath: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
});

export const apiClient = {
	getApiConfiguration: () => configuration,
	setApiConfiguration: (config: Partial<ConstructorParameters<typeof Configuration>[0]>) => {
		configuration = new Configuration({ ...configuration, ...config });
	},
	authApi: new AuthApi(configuration),
};
