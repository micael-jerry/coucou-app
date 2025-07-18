'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { loginFormSchema } from '@/schema/auth/login-form-schema';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';

export default function LoginForm() {
	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onLoginFormSubmit = (data: z.infer<typeof loginFormSchema>) => {
		console.log('Login data submitted:', data);
	};

	return (
		<Form {...loginForm}>
			<form onSubmit={loginForm.handleSubmit(onLoginFormSubmit)} className="w-full flex flex-col gap-4">
				<FormField
					control={loginForm.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="you@example.com" autoComplete="email" {...field} />
							</FormControl>
							<FormDescription className="text-red-700">{loginForm.formState.errors.email?.message}</FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={loginForm.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="**********" autoComplete="password" type="password" {...field} />
							</FormControl>
							<FormDescription className="text-red-700">{loginForm.formState.errors.password?.message}</FormDescription>
						</FormItem>
					)}
				/>
				<Button type="submit" className="mt-2 w-full">
					Login
				</Button>
			</form>
		</Form>
	);
}
