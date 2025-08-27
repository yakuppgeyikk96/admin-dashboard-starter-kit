import LeadOverview from "./lead-overview";
import LeadTable from "./lead-table";
import LeadFilters from "./lead-filters";

export default function LeadManagement() {
  return (
    <div className="space-y-6">
      <LeadOverview />
      <LeadFilters />
      <LeadTable />
    </div>
  );
}
