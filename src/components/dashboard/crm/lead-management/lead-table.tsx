import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/common/table/data-table";
import { User } from "lucide-react";
import { LEAD_TABLE_COLUMNS } from "@/constants/lead-table-columns";
import LeadTableRow from "./lead-table-row";
import { Lead } from "@/types/Lead";
import { SAMPLE_LEADS } from "@/constants/leads";

export default function LeadTable() {
  const renderRow = (lead: Lead) => <LeadTableRow key={lead.id} lead={lead} />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Lead Management</span>
          <Button size="sm">
            <User className="w-4 h-4 mr-2" />
            Add New Lead
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={LEAD_TABLE_COLUMNS}
          data={SAMPLE_LEADS}
          renderRow={renderRow}
          className="w-full"
        />

        {/* Pagination Placeholder */}
        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Showing {SAMPLE_LEADS.length} of {SAMPLE_LEADS.length} leads
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
