import z from 'zod';

export const ResetPasswordFormSchema = z
	.object({
		newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
		confirmPassword: z.string(),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});
