import { Skeleton } from "@/app/components";
import { Box, Card, Flex } from "@radix-ui/themes";

const LoaingIssueDetailPage = () => {
  return (
    <Box className="max-w-2xl">
      <Skeleton />
      <Flex gap={"3"} my={"2"}>
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      {/* Install tailwind typography to have content rendered with HTML format. 
      Add prose to parent container */}
      <Card className="prose" mt={"4"}>
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoaingIssueDetailPage;
