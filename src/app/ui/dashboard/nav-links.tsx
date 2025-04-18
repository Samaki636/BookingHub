'use client';
 
import {
  CheckIcon,
  HomeIcon,
  InformationCircleIcon,
  PencilIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/home', icon: HomeIcon},
    { name: 'Check Availability', href: '/availability', icon: CheckIcon},
    { name: 'Book a Room', href: '/booking', icon: BookOpenIcon},
    { name: 'About Us', href: '/about', icon: InformationCircleIcon},
    { name: 'Contact', href: '/contact', icon: PencilIcon},
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <div className="flex space-x-4">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-700 hover:text-blue-400',
                            {
                                'bg-gray-800 text-white': pathname != link.href,
                                'bg-blue-400 text-white': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    )
}