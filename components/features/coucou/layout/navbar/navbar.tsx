'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { ROUTES } from '@/src/constants/routes';
import { useAppStore } from '@/src/store/use-app-store';
import { Menu, PenSquare } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileDropdown from './profile-dropdown';

export default function Navbar() {
	const { toggleSidebar } = useAppStore();

	return (
		<header className="h-14 border-b border-border bg-background/95 backdrop-blur-sm flex items-center justify-between px-4 flex-shrink-0 z-30">
			{/* Left: hamburger + logo */}
			<div className="flex items-center gap-3">
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							onClick={toggleSidebar}
							className="rounded-md p-1.5 hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							aria-label="Toggle sidebar"
						>
							<Menu className="size-5" />
						</button>
					</TooltipTrigger>
					<TooltipContent side="bottom">Toggle sidebar</TooltipContent>
				</Tooltip>

				<Link href={ROUTES.COUCOU} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
					<Image src="/logo.png" alt="Coucou" width={28} height={28} priority />
					<span className="font-bold text-lg tracking-tight hidden sm:block">Coucou</span>
				</Link>
			</div>

			{/* Right: new chat + profile */}
			<div className="flex items-center gap-2">
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							className="rounded-md p-1.5 hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
							aria-label="New conversation"
						>
							<PenSquare className="size-5" />
						</button>
					</TooltipTrigger>
					<TooltipContent side="bottom">New conversation</TooltipContent>
				</Tooltip>

				<ProfileDropdown />
			</div>
		</header>
	);
}
