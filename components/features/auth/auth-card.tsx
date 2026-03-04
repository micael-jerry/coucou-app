import { ROUTES } from '@/src/constants/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AuthCardProps {
	title: string;
	description: string;
	children: React.ReactNode;
}

export default function AuthCard({ title, description, children }: Readonly<AuthCardProps>) {
	return (
		<div className="w-full max-w-md bg-background border border-border/60 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center">
			<Link href={ROUTES.HOME} className="mb-4 transition-transform hover:scale-105 active:scale-95">
				<Image src="/logo.png" alt="Coucou Logo" width={52} height={52} priority />
			</Link>
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-1.5">{title}</h1>
			<p className="text-muted-foreground text-sm text-center mb-6">{description}</p>
			{children}
		</div>
	);
}
