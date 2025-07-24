import Link from 'next/link';
import Image from 'next/image';
import LoginForm from '@/components/features/auth/login/login-form';
import { ROUTES } from '@/constants/routes';

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-muted">
			<div className="w-full max-w-md bg-background rounded-xl shadow-lg p-8 flex flex-col items-center">
				<Link href={ROUTES.HOME}>
					<Image src="/logo.png" alt="Coucou Logo" width={48} height={48} className="mb-4" priority />
				</Link>
				<h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Log in to your account</h1>
				<p className="text-muted-foreground text-center mb-6">Welcome back! Please enter your details.</p>
				<LoginForm />
				<p className="text-sm text-muted-foreground mt-6 text-center">
					{"Don't have an account? "}
					<Link href="/auth/register" className="text-primary underline hover:opacity-80">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
}
