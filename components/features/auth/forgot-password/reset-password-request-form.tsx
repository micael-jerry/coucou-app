'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { apiClient } from '@/lib/api/api-client';
import { ROUTES } from '@/src/constants/routes';
import { ResetPasswordRequestFormSchema } from '@/src/schema/auth/reset-password-request-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export default function ResetPasswordRequestForm() {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const resetPasswordRequestForm = useForm<z.infer<typeof ResetPasswordRequestFormSchema>>({
		resolver: zodResolver(ResetPasswordRequestFormSchema),
		defaultValues: {
			email: '',
		},
	});

	const onResetPasswordRequestFormSubmit = async (data: z.infer<typeof ResetPasswordRequestFormSchema>) => {
		setError(null);
		setIsLoading(true);
		try {
			const response = await apiClient.authApi.resetPasswordRequest({ resetPasswordRequestDto: { email: data.email } });
			router.push(`${ROUTES.FORGOT_PASSWORD}/success?message=${encodeURIComponent(response.data.message)}`);
		} catch (error) {
			setError('An error occurred while sending the request. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...resetPasswordRequestForm}>
			<form
				onSubmit={resetPasswordRequestForm.handleSubmit(onResetPasswordRequestFormSubmit)}
				className="w-full flex flex-col gap-4"
			>
				<FormField
					control={resetPasswordRequestForm.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder="example@example.com" autoComplete="email" {...field} />
							</FormControl>
							<FormDescription className="text-red-700">
								{resetPasswordRequestForm.formState.errors.email?.message}
							</FormDescription>
						</FormItem>
					)}
				/>
				{error && <FormDescription className="text-red-700 mb-2">{error}</FormDescription>}
				<div className="w-full flex flex-row justify-end gap-2">
					<Button type="submit" disabled={isLoading}>
						{isLoading ? 'Sending...' : 'Send Reset Link'}
					</Button>
					<Link href={ROUTES.HOME}>
						<Button variant={'secondary'} disabled={isLoading}>
							Cancel
						</Button>
					</Link>
				</div>
			</form>
		</Form>
	);
}
