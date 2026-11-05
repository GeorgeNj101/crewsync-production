import { Briefcase, Calendar, Clock, MessageSquare, Smartphone, User, Users } from "lucide-react";
import { CREW_DATA } from "../lib/demo-data";
import Avatar from "./ui/Avatar";

const DayOf = () => {
    return (
        <section id="day-of" className="scroll-mt-20 bg-[#1D1B2E] px-5 py-24 text-white sm:px-8 sm:py-28">
            <div className="mx-auto grid max-w-[1080px] items-center gap-16 lg:grid-cols-[1fr_420px]">
                <div className="max-w-[540px]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-[#C7D2FE]">
                        <Smartphone size={13} /> Built for shoot day
                    </div>
                    <h2 className="mt-7 text-[40px] font-bold leading-[1.08] tracking-[-0.045em] sm:text-[52px]">
                        The plan in every pocket.
                    </h2>
                    <p className="mt-6 text-[16px] leading-7 text-[#B8B5C8]">
                        Crew see exactly what they need, when they need it—from call
                        times and locations to the latest schedule and equipment
                        handoffs.
                    </p>
                    <div className="mt-9 grid gap-5 sm:grid-cols-2">
                        <div className="flex gap-3">
                            <span className="mt-0.5 text-[#A5B4FC]">
                                <Clock size={18} />
                            </span>
                            <div>
                                <p className="text-[13px] font-semibold">
                                Live day-of timeline
                                </p>
                                <p className="mt-1 text-[12px] leading-5 text-[#918EA4]">
                                Everyone stays on the same beat.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <span className="mt-0.5 text-[#A5B4FC]">
                                <Users size={18} />
                            </span>
                            <div>
                                <p className="text-[13px] font-semibold">
                                Crew status at a glance
                                </p>
                                <p className="mt-1 text-[12px] leading-5 text-[#918EA4]">
                                Know who is on site or en route.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="relative mx-auto w-full max-w-[340px]">
                    <div className="absolute inset-8 rounded-full bg-[#4F46E5] opacity-30 blur-[80px]"/>
                    <div className="relative rounded-[38px] border border-white/15 bg-[#0E0D17] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                        <div className="overflow-hidden rounded-[30px] bg-[#F7F6F3] text-[#1C1917]">
                            <div className="flex items-center justify-between bg-white px-5 pb-3 pt-8">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-wider text-[#9C9188]">
                                        Today · Sept 28
                                    </p>
                                    <p className="mt-1 text-[18px] font-bold">
                                        Riviera Editorial
                                    </p>
                                </div>
                                <Avatar firstName="Alex" lastName="Kovalev" />
                            </div>
                            <div className="p-4">
                                <div className="rounded-2xl bg-[#4F46E5] p-4 text-white">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] font-semibold text-[#C7D2FE]">
                                        UP NEXT
                                        </p>
                                        <span className="rounded-full bg-white/15 px-2 py-1 text-[9px]">
                                        10:30 AM
                                        </span>
                                    </div>
                                    <p className="mt-5 text-[16px] font-bold">
                                        Ceremony setup
                                    </p>
                                    <p className="mt-1 text-[10px] text-[#C7D2FE]">
                                        North lawn · 45 minutes
                                    </p>
                                </div>
                                <p className="mb-2 mt-5 text-[10px] font-bold text-[#6B6560]">
                                    CREW STATUS
                                </p>
                                <div className="overflow-hidden rounded-2xl border border-[#E9E7E2] bg-white">
                                    {CREW_DATA.slice(0, 3).map((crew, i) => (
                                        <div
                                            key={crew.name}
                                            className="flex items-center gap-3 border-b border-[#F0EEEA] p-3 last:border-0"
                                        >
                                            <Avatar
                                                firstName={crew.name.split(" ")[0]}
                                                lastName={crew.name.split(" ")[1]}
                                            />
                                            <p className="flex-1 text-[11px] font-semibold">
                                                {crew.name.split(" ")[0]}
                                            </p>
                                            <span
                                                className={`text-[9px] font-semibold ${
                                                i === 1 ? "text-[#B45309]" : "text-[#15803D]"
                                                }`}
                                            >
                                                {i === 1 ? "En route" : "On site"}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-around border-t border-[#E9E7E2] bg-white px-3 pb-5 pt-3 text-[#A09890]">
                                <span className="text-[#4F46E5]">
                                <Calendar size={18} />
                                </span>
                                <Briefcase size={18} />
                                <MessageSquare size={18} />
                                <User size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DayOf;