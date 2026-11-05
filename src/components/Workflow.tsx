import { FEATURES } from '../lib/demo-data';
import { Briefcase, Users, FileCheck } from 'lucide-react';
const IconMap = {
  Briefcase: Briefcase,
  Users: Users,
  FileCheck: FileCheck,
};
const Workflow = () => {
    return (
        <section id="workflow" className="scroll-mt-20 bg-white px-5 py-24 sm:py-32 sm:px-8">
            <div className="mx-auto max-w-[1128px]">
                <div className="max-w-[650px]">
                    <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#4F46E5]">
                        One connected workflow
                    </p>
                    <h2 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.04em] sm:text-[48px]">
                        From first call to final wrap.
                    </h2>
                    <p className="mt-5 max-w-[560px] text-[16px] leading-7 text-[#7C7167]">
                        Replace scattered docs, texts, and spreadsheets with a home base
                        your whole production can trust.
                    </p>
                </div>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-3">
                {FEATURES.map((feature, index) => {
                    const IconComponent = IconMap[feature.iconName as keyof typeof IconMap];

                    return (
                    <div
                        key={feature.title}
                        className="group rounded-2xl border border-[#E6E2DC] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#D4CFFF] hover:shadow-[0_16px_40px_rgba(50,43,37,0.08)]"
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#4F46E5]">
                                <IconComponent />
                            </div>
                            <span className="text-[11px] font-bold text-[#C5BFB8]">
                                0{index + 1}
                            </span>
                        </div>
                        <h3 className="mt-8 text-[17px] font-bold tracking-tight">
                            {feature.title}
                        </h3>
                        <p className="mt-3 text-[14px] leading-6 text-[#7C7167]">
                            {feature.text}
                        </p>

                    </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Workflow;