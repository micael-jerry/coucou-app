import SignupForm from '@/components/features/auth/signup/signup-form';
import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-muted">
			<div className="w-full max-w-md bg-background rounded-xl shadow-lg p-8 flex flex-col items-center">
				<Link href={ROUTES.HOME}>
					<Image src="/logo.png" alt="Coucou Logo" width={48} height={48} className="mb-4" priority />
				</Link>
				<h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Create your account</h1>
				<p className="text-muted-foreground text-center mb-6">Sign up to get started with Coucou.</p>
				<SignupForm />
				<p className="text-sm text-muted-foreground mt-6 text-center">
					{'Already have an account? '}
					<Link href={ROUTES.LOGIN} className="text-primary underline hover:opacity-80">
						Log in
					</Link>
				</p>
			</div>
		</div>
	);
}
