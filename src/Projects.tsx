import type { JSX } from "solid-js/jsx-runtime";
import { Stack, Typography } from "@suid/material";
import { BoxUnderTitle, Button } from "./components/common";
import Card from "./components/card";
import schedgoUrl from "./static/schedgo.jpg";
import yabobUrl from "./static/yabob.svg";
import golfGuruUrl from "./static/golfguru.jpg";

export default function Projects(): JSX.Element {
  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="h1">Projects</Typography>
      <BoxUnderTitle />
      <Stack direction={"row"} spacing={2}>
        <Card
          title="SchedGo"
          coverImgUrl={schedgoUrl}
          timestamp={"August 2020 ~ March 2022"}
          externalLinkButton={
            <Button
              text={"Visit Linkedin"}
              url="https://www.linkedin.com/company/schedgo/"
            />
          }
        >
          SchedGo is an advanced class schedule builder that generates optimized
          schedules catering to each student's personal needs and preferences. I
          was the frontend lead between 2020 and 2022, where I led the
          development of the desktop and mobile sites in Angular and React,
          respectively.
        </Card>

        <Card
          title="Golf Guru"
          coverImgUrl={golfGuruUrl}
          timestamp={"January 2022 ~ June 2022"}
          externalLinkButton={
            <Button
              text="Visit"
              url="https://codelabdavis.medium.com/golf-guru-ff70ce1630db"
            />
          }
        >
          Golf Guru is a golf-training app to help golfers improve their
          performance by practicing the mental game. I had the chance to work
          with a team of amazing designers and developers and be involved in the
          full product development cycle.
        </Card>

        <Card
          title="Y.A.B.O.B"
          subtitle="Yet Another Better Office-hour Bot"
          coverImgUrl={yabobUrl}
          timestamp={"August 2022 ~ Current"}
          externalLinkButton={
            <Button
              text="Visit Github"
              url="https://github.com/KaoushikMurugan/yet-another-better-office-hour-bot"
            />
          }
        >
          Y.A.B.O.B is a discord bot that implements a first come first serve
          queue system, where student are allowed to enter and leave the queue
          whenever they like while the office hour session is being held. This
          project is the core of the services offered by UC Davis CS Tutoring
          Club, as well as many classes at UC Davis whose office hour sessions
          are held through Discord.
        </Card>
      </Stack>
    </Stack>
  );
}
