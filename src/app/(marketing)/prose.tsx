import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

/** Long-form text layout shared by About and the legal pages. Not a route: no page.tsx here. */
export function Prose({ title, updated, children }: { title: string; updated?: string; children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="landing-page flex min-h-screen flex-col">
        <article className="mx-auto w-full max-w-[680px] flex-1 px-5 pb-20 pt-32 sm:px-8 sm:pb-28 sm:pt-40 [&_h2]:mt-10 [&_h2]:text-[18px] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:text-[#171412] [&_h2+p]:mt-2 [&_h2+ul]:mt-2 [&_li]:mt-1.5 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5">
          <h1 className="text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-[#171412] sm:text-[44px]">{title}</h1>
          {updated && <p className="!mt-3 text-[13px] text-[#9C9188]">Last updated {updated}</p>}
          <div className="mt-8 text-[15px] leading-7 text-[#4B4540]">{children}</div>
        </article>
        <Footer />
      </main>
    </>
  );
}

export function DraftNotice() {
  return (
    <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13px] leading-5 text-amber-800">
      Draft placeholder. This text has not been reviewed by a lawyer and is not yet in effect.
    </p>
  );
}
