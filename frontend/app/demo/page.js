import { getDemoPageViewModel } from "@/controllers/siteController";
import DemoPageView from "@/views/pages/DemoPageView";

export const metadata = {
  title: "Demo",
};

export default function Page() {
  return <DemoPageView {...getDemoPageViewModel()} />;
}
