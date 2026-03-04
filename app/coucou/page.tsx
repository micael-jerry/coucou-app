import { MessageSquare } from 'lucide-react';

export default function CoucouPage() {
	return (
		<div className="flex h-full flex-col items-center justify-center gap-4 text-center p-8 select-none">
			<div className="rounded-full bg-muted p-6">
				<MessageSquare className="size-10 text-muted-foreground" />
			</div>
			<div>
				<h2 className="text-xl font-semibold">Select a chat to start messaging</h2>
				<p className="text-sm text-muted-foreground mt-1 max-w-xs">
					Choose an existing conversation from the list on the left, or start a new one.
				</p>
			</div>
		</div>
	);
}
