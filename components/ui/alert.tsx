import { cva, type VariantProps } from 'class-variance-authority';
import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

const alertVariants = cva(
	'relative w-full flex items-start gap-3 rounded-lg border px-4 py-3 text-sm [&>svg]:shrink-0 [&>svg]:mt-0.5',
	{
		variants: {
			variant: {
				default: 'bg-background text-foreground border-border [&>svg]:text-foreground',
				destructive:
					'bg-destructive/10 border-destructive/30 text-destructive dark:bg-destructive/20 dark:border-destructive/40 [&>svg]:text-destructive',
				success:
					'bg-green-50 border-green-300 text-green-800 dark:bg-green-950/30 dark:border-green-800 dark:text-green-400 [&>svg]:text-green-600 dark:[&>svg]:text-green-400',
				warning:
					'bg-yellow-50 border-yellow-300 text-yellow-800 dark:bg-yellow-950/30 dark:border-yellow-800 dark:text-yellow-400 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
);

const AlertIcons = {
	default: Info,
	destructive: AlertCircle,
	success: CheckCircle2,
	warning: AlertCircle,
} as const;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
	title?: string;
	icon?: React.ReactNode;
}

function Alert({ className, variant = 'default', title, icon, children, ...props }: Readonly<AlertProps>) {
	const IconComponent = AlertIcons[variant ?? 'default'];

	return (
		<div
			role="alert"
			className={cn(alertVariants({ variant }), 'animate-in fade-in-0 slide-in-from-top-1 duration-200', className)}
			{...props}
		>
			{icon ?? <IconComponent className="size-4" />}
			<div className="flex flex-col gap-0.5">
				{title && <p className="font-semibold leading-tight">{title}</p>}
				{children && <p className="leading-snug opacity-90">{children}</p>}
			</div>
		</div>
	);
}

export { Alert, alertVariants };
