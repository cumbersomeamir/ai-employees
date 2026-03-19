import { notFound } from "next/navigation";

import {
  getEmployeePageViewModel,
  getEmployeeStaticParams,
} from "@/controllers/employeeController";
import { getLayoutViewModel } from "@/controllers/siteController";
import EmployeeDetailPageView from "@/views/pages/EmployeeDetailPageView";

export function generateStaticParams() {
  return getEmployeeStaticParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const model = getEmployeePageViewModel(slug);

  return {
    title: model ? model.employee.name : "Employee",
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const model = getEmployeePageViewModel(slug);

  if (!model) {
    notFound();
  }

  return <EmployeeDetailPageView {...getLayoutViewModel()} {...model} />;
}
