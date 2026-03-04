import { Bell, Globe, Lock, Moon, Settings } from 'lucide-react';

interface SettingsSection {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const sections: SettingsSection[] = [
	{
		icon: <Bell className="size-4" />,
		title: 'Notifications',
		description: 'Configure how and when you receive notifications.',
	},
	{
		icon: <Moon className="size-4" />,
		title: 'Appearance',
		description: 'Customize the look and feel of the application.',
	},
	{
		icon: <Lock className="size-4" />,
		title: 'Privacy & Security',
		description: 'Control who can see your information and activity.',
	},
	{
		icon: <Globe className="size-4" />,
		title: 'Language & Region',
		description: 'Set your preferred language and regional settings.',
	},
];

export default function SettingsPage() {
	return (
		<div className="flex flex-col gap-6">
			{/* Page header */}
			<div className="flex items-center gap-3">
				<div className="rounded-full bg-primary/10 p-3">
					<Settings className="size-5 text-primary" />
				</div>
				<div>
					<h1 className="text-2xl font-bold">Settings</h1>
					<p className="text-sm text-muted-foreground">Manage your app preferences</p>
				</div>
			</div>

			{/* Sections */}
			<div className="flex flex-col gap-3">
				{sections.map((section) => (
					<div
						key={section.title}
						className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-colors hover:bg-muted/40 cursor-pointer"
					>
						<div className="rounded-lg bg-primary/10 p-2 text-primary mt-0.5">{section.icon}</div>
						<div>
							<p className="font-semibold text-sm">{section.title}</p>
							<p className="text-xs text-muted-foreground mt-0.5">{section.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
