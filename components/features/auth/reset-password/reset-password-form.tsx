'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { apiClient } from '@/lib/api/api-client';
import { ROUTES } from '@/src/constants/routes';
import { ResetPasswordFormSchema } from '@/src/schema/auth/reset-password-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

interface ResetPasswordFormProps {
	token?: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const resetPasswordForm = useForm<z.infer<typeof ResetPasswordFormSchema>>({
		resolver: zodResolver(ResetPasswordFormSchema),
		defaultValues: {
			newPassword: '',
			confirmPassword: '',
		},
	});

	const onResetPasswordFormSubmit = async (data: z.infer<typeof ResetPasswordFormSchema>) => {
		setError(null);
		setIsLoading(true);

		if (!token) {
			setError('No reset token found. Please request a new reset link.');
			setIsLoading(false);
			return;
		}

		try {
			await apiClient.authApi.resetPassword({ resetPasswordDto: { token, newPassword: data.newPassword } });
			router.push(ROUTES.LOGIN);
		} catch (err) {
			console.error('Error resetting password:', err);
			setError('An error occurred while resetting your password. Please try again.');
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form {...resetPasswordForm}>
			<form onSubmit={resetPasswordForm.handleSubmit(onResetPasswordFormSubmit)} className="w-full flex flex-col gap-4">
				<FormField
					control={resetPasswordForm.control}
					name="newPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>New Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage className="text-red-700">
								{resetPasswordForm.formState.errors.newPassword?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				<FormField
					control={resetPasswordForm.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Confirm New Password</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage className="text-red-700">
								{resetPasswordForm.formState.errors.confirmPassword?.message}
							</FormMessage>
						</FormItem>
					)}
				/>
				{error && <FormMessage className="text-red-700 mb-2">{error}</FormMessage>}
				<div className="w-full flex flex-row justify-end gap-2">
					<Button type="submit" disabled={isLoading}>
						{isLoading ? 'Resetting...' : 'Reset Password'}
					</Button>
					<Button variant={'secondary'} disabled={isLoading} asChild>
						<Link href={ROUTES.HOME}>Cancel</Link>
					</Button>
				</div>
			</form>
		</Form>
	);
}
