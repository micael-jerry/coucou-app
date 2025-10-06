import z from 'zod';

export const ResetPasswordRequestFormSchema = z.object({
	email: z.email('Invalid email address').min(1, 'Email is required'),
});
