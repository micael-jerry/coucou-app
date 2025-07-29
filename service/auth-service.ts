import { SignUpDto, UserResponse } from '@/client';
import { apiClient } from '@/lib/api/api-client';

export async function signUp({ firstname, lastname, username, email, password }: SignUpDto): Promise<UserResponse> {
	const { data } = await apiClient.authApi.signUp({ signUpDto: { firstname, lastname, username, email, password } });
	return data;
}
