import AuthCard from '@/components/features/auth/auth-card';
import ResetPasswordRequestForm from '@/components/features/auth/forgot-password/reset-password-request-form';
import { ROUTES } from '@/src/constants/routes';
import Link from 'next/link';

export default function ForgotPasswordPage() {
	return (
		<AuthCard title="Find your account" description="Please enter your email to search for your account.">
			<ResetPasswordRequestForm />
			<p className="text-sm text-muted-foreground mt-1">
				<Link href={ROUTES.LOGIN} className="text-primary underline hover:opacity-80">
					Log in ?
				</Link>
			</p>
		</AuthCard>
	);
}
