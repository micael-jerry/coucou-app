import { authOptions } from '@/src/auth/auth-option';
import { getServerSession } from 'next-auth';

export default async function CoucouPage() {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<h1>Coucou Page</h1>
			<p>{JSON.stringify(session?.user)}</p>
		</div>
	);
}
