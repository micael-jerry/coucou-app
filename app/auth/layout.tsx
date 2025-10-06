import Footer from '@/components/layout/footer/footer';
import React from 'react';

interface AuthLayoutProps {
	children: React.ReactNode;
}

export default function AuthLayout({ children }: Readonly<AuthLayoutProps>) {
	return (
		<div>
			<div className="flex min-h-[90vh] items-center justify-center bg-muted">{children}</div>
			<Footer />
		</div>
	);
}
