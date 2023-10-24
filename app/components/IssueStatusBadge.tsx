"use client";

import { Status } from "@prisma/client";
import { Badge, Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  status: Status;
  issueId: any;
}

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: {
    label: "Open",
    color: "red",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "violet",
  },
  CLOSED: {
    label: "Closed",
    color: "green",
  },
};

const IssueStatusBadge = ({ status, issueId }: Props) => {
  const router = useRouter();
  const updateStatus = async (status: Status) => {
    try {
      await axios.patch(`/api/issues/${issueId}/status`, { issueId, status });
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Select.Root defaultValue={status} onValueChange={updateStatus}>
      <Select.Trigger variant="ghost" />
      <Select.Content variant="soft">
        <Select.Group>
          {Object.keys(statusMap).map((statusKey) => (
            <Select.Item
              key={statusKey}
              value={statusKey}
              className="hover:bg-slate-100"
            >
              <Badge color={statusMap[statusKey as Status].color}>
                {statusMap[statusKey as Status].label}
              </Badge>
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusBadge;
