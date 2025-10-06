import AuthCard from '@/components/features/auth/auth-card';
import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function ForgotPasswordPage() {
	return (
		<AuthCard title="Find your account" description="Please enter your email to search for your account.">
			{/* TODO: RESET PASSWORD REQUEST FORM */}
			<p className="text-sm text-muted-foreground mt-1 text-center">
				<Link href={ROUTES.LOGIN} className="text-primary underline hover:opacity-80">
					Log in ?
				</Link>
			</p>
		</AuthCard>
	);
}
