'use client';

import AuthCard from '@/components/features/auth/auth-card';
import LoginForm from '@/components/features/auth/login/login-form';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/src/constants/routes';
import { Loader2 } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function LoginContent() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const token = searchParams.get('token');
	const [isLoading, setIsLoading] = useState(!!token);

	useEffect(() => {
		if (token) {
			const authenticate = async () => {
				const res = await signIn('credentials-token', {
					token,
					redirect: false,
				});
				if (res?.ok) {
					router.replace('/');
				} else {
					setIsLoading(false);
				}
			};
			authenticate();
		}
	}, [token, router]);

	if (isLoading) {
		return <LoadingState />;
	}

	const handleGoogleLogin = () => {
		const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
		globalThis.location.href = `${apiBaseUrl}/auth/google/sign-in`;
	};

	return (
		<AuthCard title="Log in to your account" description="Welcome back! Please enter your details.">
			<LoginForm />
			<div className="mt-4 flex flex-col gap-2">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<span className="w-full border-t" />
					</div>
					<div className="relative flex justify-center text-xs uppercase">
						<span className="bg-background px-2 text-muted-foreground">Or continue with</span>
					</div>
				</div>
				<Button variant="outline" type="button" className="w-full" onClick={handleGoogleLogin}>
					<svg
						className="mr-2 h-4 w-4"
						aria-hidden="true"
						focusable="false"
						data-prefix="fab"
						data-icon="google"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 488 512"
					>
						<path
							fill="currentColor"
							d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
						></path>
					</svg>
					Google
				</Button>
			</div>
			<p className="text-sm text-muted-foreground mt-4 text-center">
				<Link href={ROUTES.FORGOT_PASSWORD} className="text-primary underline hover:opacity-80">
					Forgot password ?
				</Link>
			</p>
			<Separator className="mt-4 mb-2" />
			<Link href={ROUTES.SIGNUP} className="w-full flex justify-center">
				<Button variant={'secondary'} className="mt-2 w-[50%]">
					Sign up
				</Button>
			</Link>
		</AuthCard>
	);
}

function LoadingState() {
	return (
		<AuthCard title="Authenticating..." description="Please wait while we verify your token.">
			<div className="flex justify-center py-8">
				<Loader2 className="h-8 w-8 animate-spin text-primary" />
			</div>
		</AuthCard>
	);
}

export default function LoginPage() {
	return (
		<Suspense fallback={<LoadingState />}>
			<LoginContent />
		</Suspense>
	);
}
