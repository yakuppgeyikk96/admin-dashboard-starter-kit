import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import DataTable from "@/shared/components/common/table/data-table";
import { User } from "lucide-react";
import { LEAD_TABLE_COLUMNS } from "@/features/dashboard/crm/constants/leadTableColumns";
import LeadTableRow from "./LeadTableRow";
import { Lead } from "@/features/dashboard/crm/types/Lead";
import { LEADS } from "@/features/dashboard/crm/constants/leads";

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
          data={LEADS}
          renderRow={renderRow}
          className="w-full"
        />

        <div className="flex items-center justify-between mt-6">
          <div className="text-sm text-muted-foreground">
            Showing {LEADS.length} of {LEADS.length} leads
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
