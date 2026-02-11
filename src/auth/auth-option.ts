import { LoginDto } from '@/client';
import { apiClient } from '@/lib/api/api-client';
import { AuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
	providers: [
		CredentialsProvider({
			id: 'credentials',
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'johndoe' },
				password: { label: 'Password', type: 'password', placeholder: 'yourpassword' },
			},
			authorize: async (
				credentials: Record<'username' | 'password', string> | undefined,
				// req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>,
			): Promise<User | null> => {
				try {
					const { username, password } = credentials as LoginDto;

					const { data, status } = await apiClient.authApi.signIn({ loginDto: { username, password } });
					if (status === 200) return { ...data.user, accessToken: data.access_token };
					return null;
				} catch (err) {
					console.error(err);
					throw new Error('Invalid username or password');
				}
			},
		}),
		CredentialsProvider({
			id: 'credentials-token',
			name: 'CredentialsToken',
			credentials: {
				token: { label: 'Token', type: 'text', placeholder: 'aerjaganelkjraegaeg' },
			},
			authorize: async (credentials: Record<'token', string> | undefined): Promise<User | null> => {
				try {
					const token = credentials?.token;
					if (!token) {
						return null;
					}

					const { data, status } = await apiClient.authApi.whoAmI({ headers: { Authorization: `Bearer ${token}` } });
					if (status === 200) {
						return { ...data, accessToken: token };
					}
					return null;
				} catch (err) {
					console.error(err);
					throw new Error('Invalid token');
				}
			},
		}),
	],
	callbacks: {
		jwt({ token, account, user }) {
			if (account) {
				token.user = user;
			}
			return token;
		},
		session({ session, token }) {
			session.user = token.user;
			return session;
		},
	},
	pages: {
		signIn: '/auth/login',
	},
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};
