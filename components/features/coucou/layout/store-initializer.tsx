'use client';

import { ConversationResponse, UserResponse } from '@/client';
import { useAppStore } from '@/src/store/use-app-store';
import { useEffect } from 'react';

interface StoreInitializerProps {
	user: UserResponse | null;
	conversations: ConversationResponse[];
}

/**
 * Hydrates the Zustand store with server-fetched data.
 * Renders nothing — purely used for side-effects on mount.
 */
export default function StoreInitializer({ user, conversations }: Readonly<StoreInitializerProps>) {
	const { setCurrentUser, setConversations } = useAppStore();

	useEffect(() => {
		setCurrentUser(user);
		setConversations(conversations);
	}, [user, conversations, setCurrentUser, setConversations]);

	return null;
}
