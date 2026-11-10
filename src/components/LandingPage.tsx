import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Product from './Product';
import Workflow from './Workflow';
import DayOf from './DayOf';
import Footer from './Footer';

const LandingPage = () => {

    return (
        <main className="landing-page">
            <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pb-28 sm:pt-44">
                <div aria-hidden="true" className="landing-glow pointer-events-none absolute left-1/2 top-6 -z-10 h-[600px] w-[1280px] -translate-x-1/2" />
                <div className="mx-auto max-w-[800px] text-center">
                    <div className="inline-flex gap-2 mb-7 bg-white/80 border border-[#DDD9FF] shadow-sm px-3 py-1.5 items-center rounded-full">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EDE9FE] text-[#4F46E5]">
                            <Check size={16} />
                        </span>
                        <span className="text-[12px] font-semibold text-[#4B4540]">
                            Production, without the scramble
                        </span>

                    </div>
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
            <section className="border-y border-[#E9E7E2] bg-white px-5 py-10 sm:px-8">
                <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-7 md:flex-row">
                    <p className="max-w-[220px] text-center text-[12px] font-semibold leading-5 text-[#9C9188] md:text-left">
                    One calm workspace for every kind of production
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 text-[13px] font-bold tracking-[-0.02em] text-[#6B6560] sm:gap-x-14">
                    <span>Weddings</span>
                    <span>Campaigns</span>
                    <span>Editorial</span>
                    <span>Commercial</span>
                    <span>Events</span>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <Workflow />
            {/* Day-of Section */}
            <DayOf />

            <section className="px-5 py-24 sm:px-8 sm:py-32">
                <div className="relative mx-auto max-w-[1080px] overflow-hidden rounded-[28px] bg-[#4F46E5] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
                    <div className="landing-cta-grid absolute inset-0 opacity-20" />
                    <div className="relative mx-auto flex max-w-[620px] flex-col items-center justify-center">
                        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#C7D2FE]">
                            Ready when you are
                        </p>
                        <h2 className="mt-5 text-[36px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[50px]">
                            Less coordinating. More creating.
                        </h2>
                        <p className="mx-auto mt-5 max-w-[500px] text-[15px] leading-7 text-[#DDE2FF]">
                            Bring your next production into focus with a workspace built for
                            the way small creative teams actually work.
                        </p>
                        <Link
                            href="/sign-up"
                            className="mt-8 rounded-xl bg-white px-6 py-3.5 text-[14px] font-bold text-[#4338CA] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                        >
                            Start planning for free
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </main>
    );
};

export default LandingPage;