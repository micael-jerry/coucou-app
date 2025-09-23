'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/src/constants/routes';
import { loginFormSchema } from '@/src/schema/auth/login-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function LoginForm() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const onLoginFormSubmit = async (data: z.infer<typeof loginFormSchema>) => {
		await signIn('credentials', { redirect: false, ...data }).then((res) => {
			if (res?.error) setError(res.error);
			else {
				setError(null);
				router.push(ROUTES.COUCOU);
			}
		});
	};

	return (
		<Form {...loginForm}>
			<form onSubmit={loginForm.handleSubmit(onLoginFormSubmit)} className="w-full flex flex-col gap-4">
				<FormField
					control={loginForm.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="jhonedoe" autoComplete="username" {...field} />
							</FormControl>
							<FormDescription className="text-red-700">{loginForm.formState.errors.username?.message}</FormDescription>
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
				{error && <FormDescription className="text-red-700 mb-2">{error}</FormDescription>}
				<Button type="submit" className="mt-2 w-full">
					Login
				</Button>
			</form>
		</Form>
	);
}
