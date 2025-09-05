import LeadOverview from "./LeadOverview";
import LeadTable from "./LeadTable";
import LeadFilters from "./LeadFilters";

export default function LeadManagement() {
  return (
    <div className="space-y-6">
      <LeadOverview />
      <LeadFilters />
      <LeadTable />
    </div>
  );
}
