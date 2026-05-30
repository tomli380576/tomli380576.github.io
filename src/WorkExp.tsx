import { Stack, Typography, useTheme } from "@suid/material";
import { BoxUnderTitle, Button } from "./components/common";
import { JSX } from "solid-js/jsx-runtime";
import zonLogo from "./static/Amazon_logo.svg";
import tutoringLogo from "./static/tutoringLogo.svg";

function ExpRow({
  title,
  subtitle,
  children,
  logo,
}: {
  title: string;
  subtitle?: string;
  children?: JSX.Element;
  logo?: string;
}) {
  return (
    <Stack direction={"row"} width={"100%"} justifyContent="space-between">
      <div class="flex flex-col">
        <Typography variant="h3">{title}</Typography>
        {subtitle && <strong class="mt-2">{subtitle}</strong>}
        {logo && <img loading="lazy" src={logo} class="max-w-36 mt-4" />}
      </div>
      <div class="w-64"></div>
      <p class="max-w-[50%] items-start flex flex-col">{children}</p>
    </Stack>
  );
}

export default function WorkExperiences() {
  const theme = useTheme();
  return (
    <Stack direction={"column"} spacing={5} width={"100%"}>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h1">Work Experiences</Typography>
        <BoxUnderTitle />
      </Stack>

      <ExpRow
        title="Amazon, Intelligent Cloud Control"
        logo={zonLogo}
        subtitle="Software Engineer Intern"
      >
        <ul class="list-disc">
          <li>
            Built a full-stack web application to help customers manage scaling
            recommendations for their EC2 instances
          </li>
          <li>
            Reduced 67% of manual effort needed by service owners to apply
            service configurations by enabling bulk operations
          </li>
          <li>
            Implemented backend APIs in Java and leveraged AWS services such as
            DynamoDB and SQS queues. Tested with JUnit and Mockito with 100%
            coverage
          </li>
          <li>Leveraged multi-threading to accelerate database query</li>
        </ul>
      </ExpRow>
      <hr />

      <ExpRow
        title="UC Davis CS Tutoring"
        logo={tutoringLogo}
        subtitle="Tutor, Developer"
      >
        <ul class="list-disc">
          <li>
            Helped over 200 students understand concepts in both introductory
            and upper division computer science classes, including Discrete
            Math, Algorithm Design & Analysis, and Data Structures
          </li>
          <li>
            Wrote additional reading materials to help students understand
            challenging topics such as dynamic programming
          </li>
          <li>
            Implemented a discord bot in Typescript with Node.js that automated
            the virtual tutoring process including queueing students, recording
            tutoring hours, and sending notifications when a tutor becomes
            available
          </li>
        </ul>
        <br />

        <div class="flex flex-row gap-2">
          <Button
            text="Official Website"
            url="https://sites.google.com/view/cs-tutoring-ucd/"
          />
          <Button
            text="My Algorithm Notes"
            url="https://zhongning-tommy-li.notion.site/Algorithms-baebf66e9a614361aa02360592be8e0b"
            color="bg-blue-400"
          />
        </div>
      </ExpRow>

      <hr />
    </Stack>
  );
}
