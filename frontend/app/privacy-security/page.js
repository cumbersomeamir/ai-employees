import { getPrivacyPageViewModel } from "@/controllers/siteController";
import PrivacySecurityPageView from "@/views/pages/PrivacySecurityPageView";

export const metadata = {
  title: "Privacy & Security",
};

export default function Page() {
  return <PrivacySecurityPageView {...getPrivacyPageViewModel()} />;
}
