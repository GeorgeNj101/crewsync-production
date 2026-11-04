import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Product from './Product';

const LandingPage = () => {

    return (
        <main className="landing-page">
            <section className="relative px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
                <div className="landing-glow pointer-events-none absolute left-1/2 top-20 h-[520px] w-[900px] -translate-x-1/2 rounded-full" />
                <div className="mx-auto max-w-[800px] text-center">
                    <h1 className="tracking-[-0.055em] text-[#171412] sm:text-[66px] lg:text-[78px] text-[46px] font-bold leading-[1.02]">
                        Run every shoot
                        <span className="block text-[#4F46E5]">
                        with total clarity.
                        </span>
                    </h1>
                    <p className="mx-auto mt-7 max-w-[610px] text-[17px] leading-7 text-[#6B6560] sm:text-[19px] sm:leading-8">
                        Fieldset keeps jobs, crews, contracts, and day-of details in
                        sync—so your team can focus on the work, not the logistics.
                    </p>
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <Link
                            href="/sign-up"
                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#4F46E5] px-6 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_24px_rgba(79,70,229,0.24)] transition-all hover:-translate-y-0.5 hover:bg-[#4338CA] hover:shadow-[0_12px_30px_rgba(79,70,229,0.3)] sm:w-auto"
                        >
                            Start planning free
                            <span className="transition-transform group-hover:translate-x-0.5">
                                <ArrowRight size={16} />
                            </span>
                        </Link>
                        <Link
                            href="/jobs"
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#D8D4CE] bg-white px-6 py-3.5 text-[14px] font-semibold text-[#3D3731] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#BEB8B0] hover:shadow-md sm:w-auto"
                            >
                            Explore the demo
                        </Link>
                    </div>
                    
                    <p className="mt-4 text-[11px] font-medium text-[#9C9188]">
                        No credit card required · Built for independent teams
                    </p>
                    
                </div>
                <Product />
            </section>
            
            <section id="workflow" className="scroll-mt-16 bg-white px-5 py-20 sm:px-8">
                <div className="mx-auto max-w-[800px] text-center">
                    <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#171412]">Workflow</h2>
                </div>
            </section>
            <section id="day-of" className="scroll-mt-16 bg-white px-5 py-20 sm:px-8">
                <div className="mx-auto max-w-[800px] text-center">
                    <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#171412]">Day-of</h2>
                </div>
            </section>
        </main>
    );
};

export default LandingPage;