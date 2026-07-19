import type { IssueScope } from "@crew/core/issues/surface/scope";
import type { CreateIssueRequest } from "@crew/core/types";
import type { ViewMode } from "@crew/core/issues/stores/view-store";

export type IssueCreateDefaults = Partial<
  Omit<
    CreateIssueRequest,
    "assignee_type" | "assignee_id" | "parent_issue_id" | "project_id"
  >
> & {
  assignee_type?: CreateIssueRequest["assignee_type"] | null;
  assignee_id?: string | null;
  parent_issue_id?: string | null;
  project_id?: string | null;
};

export type IssueSurfaceMode = Extract<
  ViewMode,
  "board" | "list" | "swimlane" | "gantt"
>;

export interface IssueSurfaceProps {
  scope: IssueScope;
  modes: IssueSurfaceMode[];
  surfaceKey?: string;
  createDefaults?: IssueCreateDefaults;
}
