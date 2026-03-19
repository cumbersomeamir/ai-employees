import { getResourcesPageViewModel } from "@/controllers/siteController";
import ResourcesPageView from "@/views/pages/ResourcesPageView";

export const metadata = {
  title: "Resources",
};

export default function Page() {
  return <ResourcesPageView {...getResourcesPageViewModel()} />;
}
