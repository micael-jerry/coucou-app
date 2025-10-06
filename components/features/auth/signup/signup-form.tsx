'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/src/constants/routes';
import { SignupFormSchema } from '@/src/schema/auth/signup-form-schema';
import { signUp } from '@/src/service/auth-service';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function SignupForm() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const signupForm = useForm<z.infer<typeof SignupFormSchema>>({
		resolver: zodResolver(SignupFormSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			firstname: '',
			lastname: '',
		},
	});

	const onSignupFormSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
		try {
			setError(null);
			await signUp(data);
			router.push(ROUTES.LOGIN);
		} catch (err) {
			setError('Form submit error !!!');
			console.log(err);
		}
	};

	return (
		<Form {...signupForm}>
			<form onSubmit={signupForm.handleSubmit(onSignupFormSubmit)} className="w-full flex flex-col gap-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<FormField
						control={signupForm.control}
						name="firstname"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>First Name</FormLabel>
								<FormControl>
									<Input placeholder="Your first name" autoComplete="given-name" {...field} />
								</FormControl>
								<FormMessage className="text-red-700">{signupForm.formState.errors.firstname?.message}</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={signupForm.control}
						name="lastname"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>Last Name</FormLabel>
								<FormControl>
									<Input placeholder="Your last name" autoComplete="family-name" {...field} />
								</FormControl>
								<FormMessage className="text-red-700">{signupForm.formState.errors.lastname?.message}</FormMessage>
							</FormItem>
						)}
					/>
				</div>
				<div className="flex flex-col sm:flex-row gap-4">
					<FormField
						control={signupForm.control}
						name="username"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="Your username" autoComplete="username" {...field} />
								</FormControl>
								<FormMessage className="text-red-700">{signupForm.formState.errors.username?.message}</FormMessage>
							</FormItem>
						)}
					/>
					<FormField
						control={signupForm.control}
						name="email"
						render={({ field }) => (
							<FormItem className="flex-1">
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="you@example.com" autoComplete="email" {...field} />
								</FormControl>
								<FormMessage className="text-red-700">{signupForm.formState.errors.email?.message}</FormMessage>
							</FormItem>
						)}
					/>
				</div>
				<FormField
					control={signupForm.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="**********" autoComplete="new-password" type="password" {...field} />
							</FormControl>
							<FormMessage className="text-red-700">{signupForm.formState.errors.password?.message}</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={signupForm.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm Password</FormLabel>
							<FormControl>
								<Input placeholder="**********" autoComplete="new-password" type="password" {...field} />
							</FormControl>
							<FormMessage className="text-red-700">{signupForm.formState.errors.confirmPassword?.message}</FormMessage>
						</FormItem>
					)}
				/>
				{error && <FormMessage className="text-red-700 mb-2">{error}</FormMessage>}
				<Button
					type="submit"
					className="mt-2 w-full rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition"
				>
					Sign Up
				</Button>
			</form>
		</Form>
	);
}
