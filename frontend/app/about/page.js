import { getAboutPageViewModel } from "@/controllers/siteController";
import AboutPageView from "@/views/pages/AboutPageView";

export const metadata = {
  title: "About",
};

export default function Page() {
  return <AboutPageView {...getAboutPageViewModel()} />;
}
