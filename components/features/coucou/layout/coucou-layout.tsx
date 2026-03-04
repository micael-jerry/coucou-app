'use client';

import { apiClient } from '@/lib/api/api-client';
import { useAppStore } from '@/src/store/use-app-store';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

interface CoucouLayoutProps {
	children: React.ReactNode;
}

/** Inner component — needs to be inside SessionProvider to use useSession */
function CoucouShell({ children }: Readonly<CoucouLayoutProps>) {
	const { data: session, status } = useSession();
	const { setCurrentUser, setConversations } = useAppStore();

	useEffect(() => {
		if (status !== 'authenticated') return;
		apiClient.authApi
			.whoAmI()
			.then((res) => setCurrentUser(res.data))
			.catch(console.error);
	}, [status, setCurrentUser]);

	useEffect(() => {
		if (status !== 'authenticated') return;
		apiClient.conversationApi
			.getConversationsByUserId()
			.then((res) => setConversations(res.data))
			.catch(console.error);
	}, [status, setConversations]);

	return (
		<div className="flex flex-col h-screen overflow-hidden bg-background">
			<Navbar />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-auto">{children}</main>
			</div>
		</div>
	);
}

/**
 * Client layout that owns the SessionProvider.
 * Using SessionProvider here (in a client component) avoids the
 * "React Context unavailable in Server Components" error.
 */
export default function CoucouLayout({ children }: Readonly<CoucouLayoutProps>) {
	return (
		<SessionProvider>
			<CoucouShell>{children}</CoucouShell>
		</SessionProvider>
	);
}
