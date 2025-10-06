import z from 'zod';

export const ResetPasswordRequestFormSchema = z.object({
	email: z.email().min(1, 'Email is required'),
});
