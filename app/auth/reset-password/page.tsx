import AuthCard from '@/components/features/auth/auth-card';
import ResetPasswordForm from '@/components/features/auth/reset-password/reset-password-form';

interface ResetPasswordProps {
	searchParams: Promise<{ token?: string }>;
}

export default async function ResetPassword(props: ResetPasswordProps) {
	const searchParams = await props.searchParams;
	return (
		<AuthCard title="Reset password" description="Please enter a new password">
			<ResetPasswordForm token={searchParams.token} />
		</AuthCard>
	);
}
