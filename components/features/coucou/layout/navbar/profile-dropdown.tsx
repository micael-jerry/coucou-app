'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ROUTES } from '@/src/constants/routes';
import { useAppStore } from '@/src/store/use-app-store';
import { LogOut, Settings, User } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function getInitials(firstname: unknown, lastname: unknown, username: string): string {
	const f = typeof firstname === 'string' ? firstname : '';
	const l = typeof lastname === 'string' ? lastname : '';
	if (f || l) return `${f.charAt(0)}${l.charAt(0)}`.toUpperCase();
	return username.slice(0, 2).toUpperCase();
}

export default function ProfileDropdown() {
	const { currentUser } = useAppStore();
	const router = useRouter();

	const initials = currentUser ? getInitials(currentUser.firstname, currentUser.lastname, currentUser.username) : '??';

	const displayName =
		currentUser && (typeof currentUser.firstname === 'string' || typeof currentUser.lastname === 'string')
			? `${currentUser.firstname ?? ''} ${currentUser.lastname ?? ''}`.trim()
			: (currentUser?.username ?? '');

	const handleSignOut = async () => {
		await signOut({ callbackUrl: ROUTES.LOGIN });
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<button
					className="relative rounded-full outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-transform hover:scale-105 active:scale-95"
					aria-label="Open profile menu"
				>
					<Avatar className="size-9 cursor-pointer border-2 border-border shadow-sm">
						<AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
							{initials}
						</AvatarFallback>
					</Avatar>
				</button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" sideOffset={8} className="w-64">
				<DropdownMenuLabel className="pb-0">
					<p className="font-semibold text-sm truncate">{displayName}</p>
					<p className="text-xs text-muted-foreground font-normal truncate">@{currentUser?.username}</p>
					<p className="text-xs text-muted-foreground font-normal truncate mt-0.5">{currentUser?.email}</p>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuGroup>
					<DropdownMenuItem onClick={() => router.push(ROUTES.PROFILE_EDIT)} className="cursor-pointer gap-2">
						<User className="size-4" />
						Edit Profile
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => router.push(ROUTES.SETTINGS)} className="cursor-pointer gap-2">
						<Settings className="size-4" />
						Settings
					</DropdownMenuItem>
				</DropdownMenuGroup>

				<DropdownMenuSeparator />

				<DropdownMenuItem
					onClick={handleSignOut}
					className="cursor-pointer gap-2 text-destructive focus:text-destructive focus:bg-destructive/10"
				>
					<LogOut className="size-4" />
					Sign out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
