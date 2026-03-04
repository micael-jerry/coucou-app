'use client';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/src/constants/routes';
import { LoginFormSchema } from '@/src/schema/auth/login-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function LoginForm() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const loginForm = useForm<z.infer<typeof LoginFormSchema>>({
		resolver: zodResolver(LoginFormSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	});

	const isSubmitting = loginForm.formState.isSubmitting;

	const onLoginFormSubmit = async (data: z.infer<typeof LoginFormSchema>) => {
		setError(null);
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
								<Input placeholder="jhonedoe" autoComplete="username" disabled={isSubmitting} {...field} />
							</FormControl>
							<FormMessage />
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
								<Input
									placeholder="••••••••••"
									autoComplete="current-password"
									type="password"
									disabled={isSubmitting}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex justify-end -mt-1">
					<Link
						href={ROUTES.FORGOT_PASSWORD}
						className="text-xs text-muted-foreground hover:text-primary underline-offset-4 hover:underline transition-colors"
					>
						Forgot password?
					</Link>
				</div>
				{error && <Alert variant="destructive">{error}</Alert>}
				<Button disabled={isSubmitting} type="submit" className="w-full">
					{isSubmitting ? (
						<>
							<Loader2 className="size-4 animate-spin" />
							Logging in...
						</>
					) : (
						'Login'
					)}
				</Button>
			</form>
		</Form>
	);
}
