import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <Fragment>
      <Heading>{issue.title}</Heading>
      <Flex gap={"3"} my={"2"}>
        <IssueStatusBadge status={issue.status} issueId={issue.id}/>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      {/* Install tailwind typography to have content rendered with HTML format. 
    Add prose to parent container */}
      <Card className="prose max-w-full" mt={"4"}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </Fragment>
  );
};

export default IssueDetails;
