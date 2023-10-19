import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

// Lazy loading. Disable SSR to render on the client.
const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
