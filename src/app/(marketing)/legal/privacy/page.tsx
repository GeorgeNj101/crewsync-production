import type { Metadata } from "next";
import { DraftNotice, Prose } from "../../prose";

export const metadata: Metadata = { title: "Privacy Policy · CrewSync" };

// TODO: replace with lawyer-reviewed policy before public sign-up / app store submission.
export default function PrivacyPage() {
  return (
    <Prose title="Privacy Policy" updated="November 2026">
      <DraftNotice />
      <h2>What we collect</h2>
      <ul>
        <li>Account details: your name and email address.</li>
        <li>Job data you add: event details, client names, locations, crew roles and rates.</li>
        <li>Contracts and the typed name used to sign them, with the time of signing.</li>
        <li>Messages sent within a job.</li>
      </ul>
      <h2>How we use it</h2>
      <p>Only to run CrewSync: showing jobs to the people on them, sending invites and contracts, and messaging.</p>
      <h2>Who can see it</h2>
      <p>A job&apos;s details are visible to its admin and the crew members added to it. We do not sell your data.</p>
      <h2>Keeping and deleting data</h2>
      <p>You can ask us to delete your account and associated data at any time: [contact email].</p>
      <h2>Changes</h2>
      <p>If we change this policy we&apos;ll update the date above and notify account holders of material changes.</p>
    </Prose>
  );
}
