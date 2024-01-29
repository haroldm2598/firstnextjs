'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navLinks } from '../Data/Links';

function Navigation() {
	const pathname = usePathname();

	return (
		<nav>
			<ul className='max-w-7xl mx-auto py-5 flex gap-10'>
				{navLinks.map((item, index) => (
					<li key={index}>
						<Link
							href={item.path}
							className={`${
								pathname === item.path ? 'active' : ''
							} font-medium uppercase`}
						>
							{item.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navigation;
