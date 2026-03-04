'use client';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { apiClient } from '@/lib/api/api-client';
import { useAppStore } from '@/src/store/use-app-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const EditProfileSchema = z.object({
	username: z.string().min(3, 'Username must be at least 3 characters'),
	email: z.string().email('Invalid email address'),
	firstname: z.string().optional(),
	lastname: z.string().optional(),
	password: z.string().optional(),
});

type EditProfileFormValues = z.infer<typeof EditProfileSchema>;

interface EditProfileDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export default function EditProfileDialog({ open, onOpenChange }: Readonly<EditProfileDialogProps>) {
	const { currentUser, setCurrentUser } = useAppStore();
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const form = useForm<EditProfileFormValues>({
		resolver: zodResolver(EditProfileSchema),
		defaultValues: {
			username: currentUser?.username ?? '',
			email: currentUser?.email ?? '',
			firstname: typeof currentUser?.firstname === 'string' ? currentUser.firstname : '',
			lastname: typeof currentUser?.lastname === 'string' ? currentUser.lastname : '',
			password: '',
		},
	});

	// Reset form when user changes or dialog opens
	useEffect(() => {
		if (open && currentUser) {
			form.reset({
				username: currentUser.username,
				email: currentUser.email,
				firstname: typeof currentUser.firstname === 'string' ? currentUser.firstname : '',
				lastname: typeof currentUser.lastname === 'string' ? currentUser.lastname : '',
				password: '',
			});
			setError(null);
			setSuccess(false);
		}
	}, [open, currentUser, form]);

	const isSubmitting = form.formState.isSubmitting;

	const onSubmit = async (data: EditProfileFormValues) => {
		setError(null);
		setSuccess(false);
		try {
			const updatePayload = {
				username: data.username,
				email: data.email,
				firstname: data.firstname ?? '',
				lastname: data.lastname ?? '',
				password: data.password ?? '',
			};
			const res = await apiClient.userApi.updateUser({ updateUserDto: updatePayload });
			setCurrentUser(res.data);
			setSuccess(true);
			setTimeout(() => onOpenChange(false), 1200);
		} catch (err) {
			console.error('Update profile failed:', err);
			setError('Failed to update profile. Please try again.');
		}
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-200"
				onClick={() => !isSubmitting && onOpenChange(false)}
			/>

			{/* Dialog */}
			<div className="relative z-10 w-full max-w-md bg-background border border-border rounded-2xl shadow-2xl p-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-200">
				{/* Header */}
				<div className="flex items-center justify-between mb-6">
					<div>
						<h2 className="text-lg font-bold">Edit Profile</h2>
						<p className="text-sm text-muted-foreground">Update your personal information</p>
					</div>
					<button
						onClick={() => !isSubmitting && onOpenChange(false)}
						disabled={isSubmitting}
						className="rounded-full p-1.5 hover:bg-muted transition-colors disabled:opacity-50"
						aria-label="Close"
					>
						<X className="size-4" />
					</button>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
						<div className="flex gap-3">
							<FormField
								control={form.control}
								name="firstname"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel>First Name</FormLabel>
										<FormControl>
											<Input placeholder="First name" disabled={isSubmitting} autoComplete="given-name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastname"
								render={({ field }) => (
									<FormItem className="flex-1">
										<FormLabel>Last Name</FormLabel>
										<FormControl>
											<Input placeholder="Last name" disabled={isSubmitting} autoComplete="family-name" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder="username" disabled={isSubmitting} autoComplete="username" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											placeholder="you@example.com"
											disabled={isSubmitting}
											autoComplete="email"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										New Password{' '}
										<span className="text-muted-foreground font-normal">(leave blank to keep current)</span>
									</FormLabel>
									<FormControl>
										<Input
											placeholder="••••••••"
											disabled={isSubmitting}
											autoComplete="new-password"
											type="password"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{error && <Alert variant="destructive">{error}</Alert>}
						{success && <Alert variant="success">Profile updated successfully!</Alert>}

						<div className="flex gap-2 justify-end pt-2">
							<Button variant="secondary" type="button" disabled={isSubmitting} onClick={() => onOpenChange(false)}>
								Cancel
							</Button>
							<Button type="submit" disabled={isSubmitting}>
								{isSubmitting ? (
									<>
										<Loader2 className="size-4 animate-spin" />
										Saving...
									</>
								) : (
									'Save Changes'
								)}
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}
