import { UserResponse } from '@/client';

export type NextAuthUser = UserResponse & { accessToken: string };

declare module 'next-auth' {
	interface User extends NextAuthUser {}
	interface Session {
		user?: User;
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		user?: User;
	}
}
