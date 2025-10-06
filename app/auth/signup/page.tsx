import AuthCard from '@/components/features/auth/auth-card';
import SignupForm from '@/components/features/auth/signup/signup-form';
import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<AuthCard title="Create your account" description="Sign up to get started with Coucou.">
			<SignupForm />
			<p className="text-sm text-muted-foreground mt-6 text-center">
				{'Already have an account? '}
				<Link href={ROUTES.LOGIN} className="text-primary underline hover:opacity-80">
					Log in
				</Link>
			</p>
		</AuthCard>
	);
}
