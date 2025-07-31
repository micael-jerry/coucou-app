import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function CoucouPage() {
	const session = await getServerSession(authOptions);
	return (
		<div>
			<h1>Coucou Page</h1>
			<p>{JSON.stringify(session?.user)}</p>
		</div>
	);
}
