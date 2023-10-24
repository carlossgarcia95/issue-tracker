"use client";

import { Status } from "@prisma/client";
import { Select, Badge } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import classNames from "classnames";

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

const IssueStatusBadge = ({ status }: { status: Status }) => {
  return (
    <Select.Root defaultValue={status}>
      <Select.Trigger variant="ghost" />
      <Select.Content variant="soft">
        <Select.Group>
          {Object.keys(statusMap).map((statusKey) => (
            <Select.Item  key={statusKey} value={statusKey} className="hover:bg-slate-100">
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
