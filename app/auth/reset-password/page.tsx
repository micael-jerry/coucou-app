import AuthCard from '@/components/features/auth/auth-card';
import ResetPasswordForm from '@/components/features/auth/reset-password/reset-password-form';
import { ROUTES } from '@/src/constants/routes';
import { redirect } from 'next/navigation';

interface ResetPasswordProps {
	searchParams: Promise<{ token?: string }>;
}

export default async function ResetPassword(props: ResetPasswordProps) {
	const searchParams = await props.searchParams;

	if (!searchParams.token) redirect(ROUTES.HOME);

	return (
		<AuthCard title="Reset password" description="Please enter a new password">
			<ResetPasswordForm token={searchParams.token} />
		</AuthCard>
	);
}
