import Link from 'next/link';

const sections = [
    { label: "Product", href: "/#product" },
    { label: "Workflow", href: "/#workflow" },
    { label: "Day-of", href: "/#day-of" },
];

const Navbar = () => {
    return (
        <header className="fixed text-[#1C1917] inset-x-0 top-0 z-50 border-b border-[#E9E7E2]/80 bg-[#FBFAF8]/90 backdrop-blur-xl">
            <nav className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 sm:px-8">
                <Link href="/" className="text-[15px] font-bold tracking-[-0.02em]">
                    CrewSync
                </Link>
                <ul className="hidden items-center gap-8 md:flex">
                    {sections.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="text-[13px] font-medium text-[#6B6560] transition-colors hover:text-[#1C1917]"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-2 sm:gap-3">
                    <Link
                        href="/sign-in"
                        className="px-3 py-2 text-[13px] font-semibold text-[#4B4540] transition-colors hover:text-[#1C1917] sm:block"
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/sign-up"
                        className="rounded-xl bg-[#1C1917] px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#302C29] hover:shadow-lg"
                    >
                        Start for free
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
