import type { Metadata } from "next";
import { Prose } from "../prose";

export const metadata: Metadata = { title: "About · Crewboard" };

export default function AboutPage() {
  return (
    <Prose title="About CrewSync">
      <p>
        CrewSync gets your next job from brief to ready in a few clicks. It&apos;s one simple place to plan the shoot,
        run the day and wrap it up afterwards, without juggling group chats, spreadsheets and email threads.
      </p>
      <p>
        Paste in the client&apos;s email or drop in a screenshot. CrewSync reads it and fills in the job for you: date,
        location, client and the roles you need. Check the details, confirm, and the job is set up. From there you fill
        crew roles, send contracts and message the team, all from the same board. A live readiness score shows exactly
        what&apos;s left to sort, so you know the job is ready before the shoot day, not on it.
      </p>
      <h2>Who it&apos;s for</h2>
      <p>
        Whoever books the job and puts the crew together, whether that&apos;s a wedding, a corporate shoot or a
        documentary. CrewSync takes the admin off your plate so you can get on with the work.
      </p>
      <p>
        And the crew you bring on. They get one clear view of where to be, when, and on what terms, with nothing to set
        up and nothing to chase.
      </p>
    </Prose>
  );
}
