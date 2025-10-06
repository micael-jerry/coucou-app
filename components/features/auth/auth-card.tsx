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
		<div className="w-full max-w-md bg-background rounded-xl shadow-lg p-8 flex flex-col items-center">
			<Link href={ROUTES.HOME}>
				<Image src="/logo.png" alt="Coucou Logo" width={48} height={48} className="mb-4" priority />
			</Link>
			<h1 className="text-2xl md:text-3xl font-bold text-center mb-2">{title}</h1>
			<p className="text-muted-foreground text-center mb-6">{description}</p>
			{children}
		</div>
	);
}
