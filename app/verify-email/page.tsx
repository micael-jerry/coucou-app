import { HttpExceptionResponseDto } from '@/client';
import Footer from '@/components/layout/footer/footer';
import { apiClient } from '@/lib/api/api-client';
import { APP_NAME } from '@/src/constants/app';
import { ROUTES } from '@/src/constants/routes';
import { HttpStatusCode } from 'axios';
import { CheckCircle, XCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface VerifyEmailPageProps {
	searchParams: Promise<{ token?: string }>;
}

// TODO: update server session after verification success
export default async function VerifyEmailPage(props: VerifyEmailPageProps) {
	const searchParams = await props.searchParams;
	const result: HttpExceptionResponseDto = await apiClient.authApi
		.verifyEmail({ token: searchParams.token ?? '' })
		.then((res) => res.data)
		.catch((err) => err.response.data);

	const isError = result.status && result.status !== HttpStatusCode.Ok;

	return (
		<main className="flex flex-col min-h-screen bg-background">
			<header className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
				<Link href={ROUTES.HOME} className="flex items-center gap-2">
					<Image src="/logo.png" alt={`${APP_NAME} Logo`} width={36} height={36} className="rounded-md" priority />
					<span className="font-bold text-lg md:text-xl">{APP_NAME}</span>
				</Link>
			</header>

			<section className="flex flex-1 flex-col items-center justify-center text-center px-4">
				<div className="flex flex-col items-center gap-6">
					<div className={`rounded-full p-6 ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
						{isError ? (
							<XCircle className="w-12 h-12 text-red-600" />
						) : (
							<CheckCircle className="w-12 h-12 text-green-600" />
						)}
					</div>

					<div>
						<h1 className="text-2xl sm:text-3xl font-bold mb-2">
							{isError ? 'Verification Failed' : 'Email Verified!'}
						</h1>
						<p className="text-muted-foreground text-base sm:text-lg max-w-md">{result.message}</p>
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
