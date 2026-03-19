import { getCompanyBrainPageViewModel } from "@/controllers/siteController";
import CompanyBrainPageView from "@/views/pages/CompanyBrainPageView";

export const metadata = {
  title: "Company Brain",
};

export default function Page() {
  return <CompanyBrainPageView {...getCompanyBrainPageViewModel()} />;
}
