'use client';

import { Alert } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { apiClient } from '@/lib/api/api-client';
import { useAppStore } from '@/src/store/use-app-store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, User } from 'lucide-react';
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

export default function EditProfilePage() {
	const { currentUser, setCurrentUser } = useAppStore();
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);

	const form = useForm<EditProfileFormValues>({
		resolver: zodResolver(EditProfileSchema),
		defaultValues: {
			username: '',
			email: '',
			firstname: '',
			lastname: '',
			password: '',
		},
	});

	// Populate form once user is loaded from zustand
	useEffect(() => {
		if (!currentUser) return;
		form.reset({
			username: currentUser.username,
			email: currentUser.email,
			firstname: typeof currentUser.firstname === 'string' ? currentUser.firstname : '',
			lastname: typeof currentUser.lastname === 'string' ? currentUser.lastname : '',
			password: '',
		});
	}, [currentUser, form]);

	const isSubmitting = form.formState.isSubmitting;

	const onSubmit = async (data: EditProfileFormValues) => {
		setError(null);
		setSuccess(false);
		try {
			const res = await apiClient.userApi.updateUser({
				updateUserDto: {
					username: data.username,
					email: data.email,
					firstname: data.firstname ?? '',
					lastname: data.lastname ?? '',
					password: data.password ?? '',
				},
			});
			setCurrentUser(res.data);
			setSuccess(true);
		} catch (err) {
			console.error('Update profile failed:', err);
			setError('Failed to update profile. Please try again.');
		}
	};

	return (
		<div className="flex flex-col gap-6">
			{/* Page header */}
			<div className="flex items-center gap-3">
				<div className="rounded-full bg-primary/10 p-3">
					<User className="size-5 text-primary" />
				</div>
				<div>
					<h1 className="text-2xl font-bold">Edit Profile</h1>
					<p className="text-sm text-muted-foreground">Update your personal information</p>
				</div>
			</div>

			{/* Form card */}
			<div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
						<div className="flex gap-4">
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
										<span className="text-muted-foreground font-normal text-xs">(leave blank to keep current)</span>
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

						<div className="flex justify-end pt-1">
							<Button type="submit" disabled={isSubmitting} className="min-w-32">
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
