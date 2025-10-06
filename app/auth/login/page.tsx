import AuthCard from '@/components/features/auth/auth-card';
import LoginForm from '@/components/features/auth/login/login-form';
import Footer from '@/components/layout/footer/footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
	return (
		<AuthCard title="Log in to your account" description="Welcome back! Please enter your details.">
			<LoginForm />
			<p className="text-sm text-muted-foreground mt-1 text-center">
				<Link href={ROUTES.FORGOT_PASSWORD} className="text-primary underline hover:opacity-80">
					Forgot password ?
				</Link>
			</p>
			<Separator className="mt-2 mb-2" />
			<Link href={ROUTES.SIGNUP} className="w-full flex justify-center">
				<Button variant={'secondary'} className="mt-2 w-[50%]">
					Sign up
				</Button>
			</Link>
		</AuthCard>
	);
}
