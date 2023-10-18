import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = async () => {
  return (
    <Box className="max-w-l">
      Loading...
      <Skeleton />
      <Skeleton height={"20rem"} />
    </Box>
  );
};

export default LoadingNewIssuePage;
