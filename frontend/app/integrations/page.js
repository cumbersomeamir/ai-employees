import { getIntegrationsPageViewModel } from "@/controllers/siteController";
import IntegrationsPageView from "@/views/pages/IntegrationsPageView";

export const metadata = {
  title: "Integrations",
};

export default function Page() {
  return <IntegrationsPageView {...getIntegrationsPageViewModel()} />;
}
