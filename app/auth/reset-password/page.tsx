import AuthCard from '@/components/features/auth/auth-card';
import ResetPasswordForm from '@/components/features/auth/reset-password/reset-password-form';

export default async function ResetPassword() {
	return (
		<AuthCard title="Reset password" description="Please enter a new password">
			<ResetPasswordForm />
		</AuthCard>
	);
}
