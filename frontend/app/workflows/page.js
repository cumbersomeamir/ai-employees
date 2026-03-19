import { getWorkflowsPageViewModel } from "@/controllers/siteController";
import WorkflowsPageView from "@/views/pages/WorkflowsPageView";

export const metadata = {
  title: "Workflows",
};

export default function Page() {
  return <WorkflowsPageView {...getWorkflowsPageViewModel()} />;
}
