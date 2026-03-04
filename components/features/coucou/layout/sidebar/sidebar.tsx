'use client';

import { ConversationResponse } from '@/client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/src/constants/routes';
import { useAppStore } from '@/src/store/use-app-store';
import { MessageSquare, Search, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

function formatRelativeTime(dateStr: string): string {
	try {
		const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
		if (diff < 60) return 'just now';
		if (diff < 3600) return `${Math.floor(diff / 60)}m`;
		if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
		if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
		return `${Math.floor(diff / 604800)}w`;
	} catch {
		return '';
	}
}

function getConversationDisplay(conv: ConversationResponse, currentUserId: string | undefined) {
	if (conv.type === 'PRIVATE') {
		const other = conv.members.find((m) => m.id !== currentUserId);
		const name = other ? `${other.firstname ?? ''} ${other.lastname ?? ''}`.trim() || other.username : conv.name;
		const initials = name.slice(0, 2).toUpperCase();
		return { name, initials };
	}
	return {
		name: conv.name,
		initials: conv.name.slice(0, 2).toUpperCase(),
	};
}

function getLastMessage(conv: ConversationResponse): string {
	const messages = conv.messages;
	if (!messages || messages.length === 0) return 'No messages yet';
	const last = messages[messages.length - 1];
	return last.content.length > 40 ? last.content.slice(0, 40) + '…' : last.content;
}

function getLastMessageTime(conv: ConversationResponse): string {
	const messages = conv.messages;
	if (!messages || messages.length === 0) return '';
	const last = messages[messages.length - 1];
	return formatRelativeTime(last.createdAt);
}

interface ConversationItemProps {
	conv: ConversationResponse;
	isActive: boolean;
	currentUserId: string | undefined;
	onClick: () => void;
}

function ConversationItem({ conv, isActive, currentUserId, onClick }: Readonly<ConversationItemProps>) {
	const { name, initials } = getConversationDisplay(conv, currentUserId);
	const lastMsg = getLastMessage(conv);
	const lastTime = getLastMessageTime(conv);

	return (
		<button
			onClick={onClick}
			className={cn(
				'w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group',
				isActive && 'bg-primary/10 hover:bg-primary/15',
			)}
		>
			<Avatar className="size-10 shrink-0 border border-border/50">
				<AvatarFallback className={cn('text-sm font-semibold', isActive ? 'bg-primary/20' : 'bg-muted-foreground/10')}>
					{initials}
				</AvatarFallback>
			</Avatar>
			<div className="flex-1 min-w-0">
				<div className="flex items-baseline justify-between gap-1">
					<p className={cn('text-sm font-semibold truncate', isActive && 'text-primary')}>{name}</p>
					{lastTime && <span className="text-xs text-muted-foreground shrink-0">{lastTime}</span>}
				</div>
				<p className="text-xs text-muted-foreground truncate mt-0.5">{lastMsg}</p>
			</div>
		</button>
	);
}

export default function Sidebar() {
	const { conversations, activeConversationId, setActiveConversationId, currentUser, isSidebarOpen } = useAppStore();
	const router = useRouter();
	const [search, setSearch] = useState('');

	const filteredConversations = useMemo(() => {
		if (!search.trim()) return conversations;
		const q = search.toLowerCase();
		return conversations.filter((conv) => {
			const { name } = getConversationDisplay(conv, currentUser?.id);
			return name.toLowerCase().includes(q);
		});
	}, [conversations, search, currentUser?.id]);

	const handleConversationClick = (id: string) => {
		setActiveConversationId(id);
		router.push(ROUTES.COUCOU_CONVERSATION(id));
	};

	return (
		<aside
			className={cn(
				'flex flex-col border-r border-border bg-background transition-all duration-300 ease-in-out overflow-hidden',
				isSidebarOpen ? 'w-72 sm:w-80' : 'w-0',
			)}
		>
			<div className="flex flex-col h-full min-w-[18rem] sm:min-w-[20rem]">
				{/* Header */}
				<div className="p-4 pb-2">
					<h2 className="font-bold text-lg mb-3 flex items-center gap-2">
						<MessageSquare className="size-5 text-primary" />
						Chats
					</h2>

					{/* Search */}
					<div className="relative">
						<Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
						<input
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search conversations..."
							className="w-full h-9 pl-9 pr-3 rounded-lg border border-input bg-muted/50 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-[box-shadow,border-color]"
						/>
					</div>
				</div>

				{/* Conversations list */}
				<div className="flex-1 overflow-y-auto px-2 pb-2 space-y-0.5">
					{filteredConversations.length === 0 ? (
						<div className="flex flex-col items-center justify-center gap-2 py-12 text-muted-foreground">
							{search ? (
								<>
									<Search className="size-8 opacity-30" />
									<p className="text-sm">No conversations found</p>
								</>
							) : (
								<>
									<Users className="size-8 opacity-30" />
									<p className="text-sm">No conversations yet</p>
									<p className="text-xs opacity-70">Start a new conversation</p>
								</>
							)}
						</div>
					) : (
						filteredConversations.map((conv) => (
							<ConversationItem
								key={conv.id}
								conv={conv}
								isActive={activeConversationId === conv.id}
								currentUserId={currentUser?.id}
								onClick={() => handleConversationClick(conv.id)}
							/>
						))
					)}
				</div>
			</div>
		</aside>
	);
}
