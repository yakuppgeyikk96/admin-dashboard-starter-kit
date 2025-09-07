import CrmStatisticsGrid from "@/features/crm/components/CrmStatisticsGrid";
import LeadPipeline from "@/features/crm/components/LeadPipeline";
import RecentLeads from "@/features/crm/components/RecentLeads";
import DealStages from "@/features/crm/components/DealStages";
import LeadManagement from "@/features/crm/components/LeadManagement";

export default function DashboardCrmPage() {
  return (
    <div className="space-y-6 py-6">
      <CrmStatisticsGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeadPipeline />
        <DealStages />
      </div>

      <RecentLeads />

      <LeadManagement />
    </div>
  );
}
