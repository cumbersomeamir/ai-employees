import { getFaqPageViewModel } from "@/controllers/siteController";
import FAQPageView from "@/views/pages/FAQPageView";

export const metadata = {
  title: "FAQ",
};

export default function Page() {
  return <FAQPageView {...getFaqPageViewModel()} />;
}
