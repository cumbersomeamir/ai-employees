import { getEmployeesOverviewViewModel } from "@/controllers/employeeController";
import EmployeesOverviewPageView from "@/views/pages/EmployeesOverviewPageView";
import { getLayoutViewModel } from "@/controllers/siteController";

export const metadata = {
  title: "Employees",
};

export default function Page() {
  return (
    <EmployeesOverviewPageView
      {...getLayoutViewModel()}
      {...getEmployeesOverviewViewModel()}
    />
  );
}
