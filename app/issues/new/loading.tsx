import { Box } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import delay from 'delay'

const LoadingNewIssuePage = async () => {
    await delay(2000)
  return (
    <Box className="max-w-l">
      Loading...
      <Skeleton />
      <Skeleton height={"20rem"} />
    </Box>
  );
};

export default LoadingNewIssuePage;
