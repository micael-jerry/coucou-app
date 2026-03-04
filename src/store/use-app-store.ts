import { ConversationResponse, UserResponse } from '@/client';
import { create } from 'zustand';

interface AppState {
	currentUser: UserResponse | null;
	conversations: ConversationResponse[];
	activeConversationId: string | null;
	isSidebarOpen: boolean;

	setCurrentUser: (user: UserResponse | null) => void;
	setConversations: (conversations: ConversationResponse[]) => void;
	setActiveConversationId: (id: string | null) => void;
	toggleSidebar: () => void;
	setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
	currentUser: null,
	conversations: [],
	activeConversationId: null,
	isSidebarOpen: true,

	setCurrentUser: (user) => set({ currentUser: user }),
	setConversations: (conversations) => set({ conversations }),
	setActiveConversationId: (id) => set({ activeConversationId: id }),
	toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
	setSidebarOpen: (open) => set({ isSidebarOpen: open }),
}));
