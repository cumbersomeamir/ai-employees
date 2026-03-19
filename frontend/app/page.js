import { getHomePageViewModel } from "@/controllers/siteController";
import HomePageView from "@/views/pages/HomePageView";

export default function Page() {
  return <HomePageView {...getHomePageViewModel()} />;
}
