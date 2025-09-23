import { APP_CREATOR, APP_CREATOR_URL, APP_NAME, APP_YEAR } from '@/src/constants/app';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="w-full py-6 border-t text-center text-sm text-muted-foreground">
			© {APP_YEAR} {APP_NAME}. All rights reserved.
			<br />
			Created by{' '}
			<Link
				href={APP_CREATOR_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="underline hover:text-primary transition-colors"
			>
				{APP_CREATOR}
			</Link>
		</footer>
	);
}
