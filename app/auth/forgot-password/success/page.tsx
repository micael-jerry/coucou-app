import AuthCard from '@/components/features/auth/auth-card';
import { ROUTES } from '@/src/constants/routes';
import { redirect } from 'next/navigation';

interface ResetPasswordReqSuccessPageProps {
	searchParams: Promise<{ message?: string }>;
}

export default async function ResetPasswordReqSuccessPage(props: ResetPasswordReqSuccessPageProps) {
	const searchParams = await props.searchParams;

	if (!searchParams.message) redirect(ROUTES.FORGOT_PASSWORD);

	return (
		<AuthCard title="Reset password request success" description={searchParams.message}>
			<p className="text-sm text-muted-foreground mt-1">You can close this page and see your email</p>
		</AuthCard>
	);
}
