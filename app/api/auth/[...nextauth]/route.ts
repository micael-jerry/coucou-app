import { LoginDto } from '@/client';
import { apiClient } from '@/lib/api/api-client';
import NextAuth, { RequestInternal, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'johndoe' },
				password: { label: 'Password', type: 'password', placeholder: 'yourpassword' },
			},
			authorize: async (
				credentials: Record<'username' | 'password', string> | undefined,
				req: Pick<RequestInternal, 'body' | 'query' | 'headers' | 'method'>,
			): Promise<User | null> => {
				try {
					const { username, password } = credentials as LoginDto;

					const { data, status } = await apiClient.authApi.signIn({ loginDto: { username, password } });
					if (status === 200) return { ...data.user, accessToken: data.access_token };
					return null;
				} catch (err) {
					throw new Error('Invalid username or password');
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
});

export { handler as GET, handler as POST };
