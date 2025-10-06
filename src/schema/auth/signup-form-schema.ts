import z from 'zod';

export const SignupFormSchema = z
	.object({
		username: z.string().min(5, 'Username is required'),
		email: z.email().min(1, 'Email is required'),
		password: z
			.string()
			.min(8, 'Password must be at least 8 characters long')
			.max(50, 'Password must not exceed 50 characters'),
		confirmPassword: z.string().min(8, 'Please confirm your password'),
		firstname: z.string().min(1, 'First name is required'),
		lastname: z.string().min(1, 'Last name is required'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match",
		path: ['confirmPassword'],
	});
