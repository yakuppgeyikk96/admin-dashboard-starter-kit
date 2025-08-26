import CrmStatisticsGrid from "@/components/dashboard/crm/crm-statistics-grid";
import LeadPipeline from "@/components/dashboard/crm/lead-pipeline";
import RecentLeads from "@/components/dashboard/crm/recent-leads";
import DealStages from "@/components/dashboard/crm/deal-stages";

export default function DashboardCrmPage() {
  return (
    <div className="space-y-6 py-6">
      <CrmStatisticsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeadPipeline />
        <DealStages />
      </div>

      <RecentLeads />
    </div>
  );
}
