import { getPricingPageViewModel } from "@/controllers/siteController";
import PricingPageView from "@/views/pages/PricingPageView";

export const metadata = {
  title: "Pricing",
};

export default function Page() {
  return <PricingPageView {...getPricingPageViewModel()} />;
}
