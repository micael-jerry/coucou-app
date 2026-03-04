'use client';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/src/constants/routes';
import { SignupFormSchema } from '@/src/schema/auth/signup-form-schema';
import { signUp } from '@/src/service/auth-service';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
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

	const isSubmitting = signupForm.formState.isSubmitting;

	const onSignupFormSubmit = async (data: z.infer<typeof SignupFormSchema>) => {
		try {
			setError(null);
			await signUp(data);
			router.push(ROUTES.LOGIN);
		} catch (err) {
			const message =
				err instanceof Error ? err.message : 'An error occurred while creating your account. Please try again.';
			setError(message);
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
									<Input placeholder="Your first name" autoComplete="given-name" disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
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
									<Input placeholder="Your last name" autoComplete="family-name" disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
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
									<Input placeholder="Your username" autoComplete="username" disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
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
									<Input placeholder="you@example.com" autoComplete="email" disabled={isSubmitting} {...field} />
								</FormControl>
								<FormMessage />
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
								<Input
									placeholder="••••••••••"
									autoComplete="new-password"
									type="password"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
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
								<Input
									placeholder="••••••••••"
									autoComplete="new-password"
									type="password"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{error && <Alert variant="destructive">{error}</Alert>}
				<Button disabled={isSubmitting} type="submit" className="mt-2 w-full">
					{isSubmitting ? (
						<>
							<Loader2 className="size-4 animate-spin" />
							Creating account...
						</>
					) : (
						'Sign Up'
					)}
				</Button>
			</form>
		</Form>
	);
}
