import Link from "next/link";
const Footer = () => {
    return (
        <footer className="border-t border-[#E9E7E2] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <Link href="/" className="text-[13px] font-bold">
              CrewSync
            </Link>
          </div>
          <p className="text-[11px] text-[#9C9188]">
            Production coordination for independent creative teams.
          </p>
          <div className="flex gap-5 text-[11px] font-medium text-[#7C7167]">
            <a href="#product">Product</a>
            <Link href="/sign-in">Sign in</Link>
          </div>
        </div>
      </footer>
    );
}

export default Footer;