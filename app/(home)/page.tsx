import Footer from '@/components/layout/footer/footer';
import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/src/constants/app';
import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-background">
			<header className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
				<Link href={ROUTES.HOME} className="flex items-center gap-2">
					<Image src="/logo.png" alt={`${APP_NAME} Logo`} width={36} height={36} className="rounded-md" priority />
					<span className="font-bold text-lg md:text-xl">{APP_NAME}</span>
				</Link>
				<div className="flex gap-2">
					<Link href={ROUTES.LOGIN}>
						<Button variant="ghost" size="sm">
							Log In
						</Button>
					</Link>
					<Link href={ROUTES.SIGNUP}>
						<Button size="sm">Sign Up</Button>
					</Link>
				</div>
			</header>

			<section className="flex flex-1 flex-col items-center justify-center text-center px-4">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Stay connected, effortlessly.</h1>
				<p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto">
					A simple, reliable, and private way to chat with your favorite people. Join the conversation and start
					connecting today.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md">
					<Link href={ROUTES.SIGNUP}>
						<Button size="lg" className="w-full sm:w-auto">
							Create New Account
						</Button>
					</Link>
					<Link href={ROUTES.LOGIN}>
						<Button variant="secondary" size="lg" className="w-full sm:w-auto">
							Already have an account? Log In
						</Button>
					</Link>
				</div>
			</section>

			<Footer />
		</main>
	);
}
