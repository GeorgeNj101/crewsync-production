import { MessageSquare, Users, Briefcase } from 'lucide-react';
import { PREVIEW_OPTIONS } from '../lib/demo-data';

const IconMap = {
  Briefcase: Briefcase,
  Users: Users,
  MessageSquare: MessageSquare,
};

const Product = () => {
    
    
    return (
        <section id="product" className="relative mx-auto mt-16 max-w-[1080px] scroll-mt-24 sm:mt-20">
            <div className="landing-window overflow-hidden rounded-[22px] border border-[#DCD8D2] bg-white shadow-[0_32px_80px_rgba(38,32,27,0.16)]">
                <div className="flex h-11 items-center border-b border-[#E9E7E2] bg-[#F7F6F3] px-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9D5CF]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9D5CF]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#D9D5CF]" />
                  </div>
                  <div className="mx-auto rounded-md border border-[#E9E7E2] bg-white px-16 py-1 text-[9px] text-[#A09890] sm:px-28">
                    app.crew-sync.com
                  </div>
                </div>
                <div className="flex h-[430px] sm:h-[520px]">
                    <div className="hidden w-[170px] shrink-0 border-r border-[#E9E7E2] bg-white p-4 sm:block">
                        <div className="mb-7 flex items-center">
                            <span className="text-[11px] font-bold">CrewSync</span>
                        </div>
                        {PREVIEW_OPTIONS.map(({ label, iconName, active }) => {
                            const IconComponent = IconMap[iconName as keyof typeof IconMap];
                            return (
                                <div
                                    key={label}
                                    className={`mb-1 flex items-center gap-2 rounded-lg px-2.5 py-2 text-[10px] font-semibold ${
                                    active
                                        ? "bg-[#EEF2FF] text-[#4338CA]"
                                        : "text-[#7C7167]"
                                    }`}
                                >
                                    <IconComponent size={16} />
                                    {label}
                                </div>
                            );
                        }
                        )}
                    </div>
                    <div className="min-w-0 flex-1 bg-[#F7F6F3] p-4 sm:p-7 lg:p-9">
                        <div className="mb-6 flex items-end justify-between">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9C9188]">
                                Production overview
                                </p>
                                <h2 className="mt-1 text-[19px] font-bold tracking-tight sm:text-[24px]">
                                Good morning, Kate
                                </h2>
                            </div>
                            <div
                                className="rounded-lg bg-[#4F46E5] px-3 py-2 text-[9px] font-semibold text-white sm:text-[10px]"
                            >
                                + New job
                            </div>
                        </div>
                        <div className="mb-5 grid grid-cols-3 gap-2 sm:gap-3">
                        {[
                            ["5", "Active jobs"],
                            ["2", "Need attention"],
                            ["12", "Crew members"],
                        ].map(([value, label]) => (
                            <div
                            key={label}
                            className="rounded-xl border border-[#E9E7E2] bg-white p-3 sm:p-4"
                            >
                            <p className="text-[18px] font-bold sm:text-[22px]">
                                {value}
                            </p>
                            <p className="mt-1 text-[8px] text-[#9C9188] sm:text-[10px]">
                                {label}
                            </p>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;