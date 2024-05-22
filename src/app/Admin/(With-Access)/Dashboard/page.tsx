import React from "react";
import AdminCards from "./AdminCards";
import AdminPieChart from "./AdminCharts/AdminPieChart";
import AdminLineChart from "./AdminCharts/AdminLineChart";
import RecentCourses from "./RecentlyAddedCourses";
import QuickActions from "./QuickActions";
import UserActivity from "./UserActivityTable";
import AdminCharts from "./AdminCharts/AdminCharts";

export default async function Dashboard() {
  return (
    <main className="grid grid-cols-1 gap-8">
      <AdminCards />
      <AdminCharts />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <RecentCourses />
        <QuickActions />
      </div>
      <div className="grid grid-cols-1">
        <UserActivity />
      </div>
    </main>
  );
}
