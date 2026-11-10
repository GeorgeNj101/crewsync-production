import type { Metadata } from "next";
import { DraftNotice, Prose } from "../../prose";

export const metadata: Metadata = { title: "Terms of Service · CrewSync" };

// TODO: replace with lawyer-reviewed terms before public sign-up / app store submission.
export default function TermsPage() {
  return (
    <Prose title="Terms of Service" updated="November 2026">
      <DraftNotice />
      <h2>1. Accepting these terms</h2>
      <p>By creating an account or using CrewSync, you agree to these terms.</p>
      <h2>2. Your account</h2>
      <p>You are responsible for your account and for keeping your sign-in details secure.</p>
      <h2>3. Your content</h2>
      <p>
        You own the jobs, contracts and messages you add. You give us permission to store and process them only to run
        the service for you and the crew you share them with.
      </p>
      <h2>4. Contracts between users</h2>
      <p>
        Contracts sent through CrewSync are between you and your crew. CrewSync is not a party to them and does not
        give legal advice.
      </p>
      <h2>5. Acceptable use</h2>
      <p>Don&apos;t use CrewSync to break the law, harass others, or interfere with the service.</p>
      <h2>6. Termination</h2>
      <p>You can stop using CrewSync at any time. We may suspend accounts that violate these terms.</p>
      <h2>7. Contact</h2>
      <p>Questions about these terms: [contact email].</p>
    </Prose>
  );
}
