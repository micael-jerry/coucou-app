import { SignUpDto, UserResponse } from '@/client';
import { apiClient } from '@/lib/api/api-client';
import { signupFormSchema } from '@/schema/auth/signup-form-schema';
import z from 'zod';

export async function signUp({
	firstname,
	lastname,
	username,
	email,
	password,
}: z.infer<typeof signupFormSchema>): Promise<UserResponse> {
	const { data } = await apiClient.authApi.signUp({ signUpDto: { firstname, lastname, username, email, password } });
	return data;
}
