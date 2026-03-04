import { authOptions } from '@/src/auth/auth-option';
import { ROUTES } from '@/src/constants/routes';
import { ChevronLeft } from 'lucide-react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

interface ProfileLayoutProps {
	children: React.ReactNode;
}

export default async function ProfileLayout({ children }: Readonly<ProfileLayoutProps>) {
	const session = await getServerSession(authOptions);
	if (!session) redirect(ROUTES.LOGIN);

	return (
		<div className="min-h-screen bg-background">
			{/* Top bar */}
			<header className="h-14 border-b border-border bg-background/95 backdrop-blur-sm flex items-center px-4 gap-3">
				<Link
					href={ROUTES.COUCOU}
					className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					<ChevronLeft className="size-4" />
					Back to chats
				</Link>
			</header>

			{/* Page content */}
			<main className="max-w-2xl mx-auto px-4 py-8">{children}</main>
		</div>
	);
}
