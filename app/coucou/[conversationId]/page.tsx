'use client';

import { ConversationResponse } from '@/client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { apiClient } from '@/lib/api/api-client';
import { useAppStore } from '@/src/store/use-app-store';
import { MessageSquare } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function getDisplayName(conv: ConversationResponse, currentUserId: string | undefined): string {
	if (conv.type === 'PRIVATE') {
		const other = conv.members.find((m) => m.id !== currentUserId);
		if (other) {
			const name = `${other.firstname ?? ''} ${other.lastname ?? ''}`.trim();
			return name || other.username;
		}
	}
	return conv.name;
}

export default function ConversationPage() {
	const { conversationId } = useParams<{ conversationId: string }>();
	const { currentUser } = useAppStore();
	const [conversation, setConversation] = useState<ConversationResponse | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!conversationId) return;
		setLoading(true);
		apiClient.conversationApi
			.getConversationById({ conversationId })
			.then((res) => setConversation(res.data))
			.catch(console.error)
			.finally(() => setLoading(false));
	}, [conversationId]);

	if (loading) {
		return (
			<div className="flex h-full items-center justify-center">
				<div className="flex flex-col items-center gap-3 text-muted-foreground">
					<div className="size-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
					<p className="text-sm">Loading conversation...</p>
				</div>
			</div>
		);
	}

	if (!conversation) {
		return (
			<div className="flex h-full items-center justify-center text-muted-foreground">
				<p>Conversation not found.</p>
			</div>
		);
	}

	const displayName = getDisplayName(conversation, currentUser?.id);
	const initials = displayName.slice(0, 2).toUpperCase();

	return (
		<div className="flex h-full flex-col">
			{/* Conversation header */}
			<div className="flex items-center gap-3 px-5 py-3 border-b border-border bg-background/95 backdrop-blur-sm">
				<Avatar className="size-9 border border-border/50">
					<AvatarFallback className="text-sm font-semibold bg-muted-foreground/10">{initials}</AvatarFallback>
				</Avatar>
				<div>
					<p className="font-semibold text-sm">{displayName}</p>
					<p className="text-xs text-muted-foreground capitalize">{conversation.type.toLowerCase()} conversation</p>
				</div>
			</div>

			{/* Messages area (placeholder) */}
			<div className="flex-1 overflow-y-auto flex flex-col items-center justify-center gap-4 text-center p-8">
				<div className="rounded-full bg-muted p-5">
					<MessageSquare className="size-8 text-muted-foreground" />
				</div>
				<div>
					<h3 className="font-semibold text-base">Start of your conversation with {displayName}</h3>
					<p className="text-sm text-muted-foreground mt-1">Messages will appear here</p>
				</div>

				{/* Show existing messages if any */}
				{conversation.messages.length > 0 && (
					<div className="w-full max-w-2xl mt-4 space-y-3 text-left">
						{conversation.messages.slice(-10).map((msg) => {
							const isMe = msg.senderId === currentUser?.id;
							return (
								<div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
									<div
										className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${
											isMe
												? 'bg-primary text-primary-foreground rounded-br-sm'
												: 'bg-muted text-foreground rounded-bl-sm'
										}`}
									>
										{msg.content}
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
