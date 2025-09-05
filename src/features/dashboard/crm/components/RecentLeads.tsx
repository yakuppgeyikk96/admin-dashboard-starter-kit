import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { LEADS } from "@/features/dashboard/crm/constants/leads";
import { getInitials, formatCurrency } from "@/shared/lib/utils";
import { getRecentLeadStatusColor } from "@/features/dashboard/crm/utils/getRecentLeadStatusColor";

export default function RecentLeads() {
  const recentLeads = LEADS.slice(0, 3);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Leads</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentLeads.map((lead) => (
            <div
              key={lead.id}
              className="flex items-center space-x-4 p-3 rounded-lg border"
            >
              <Avatar>
                <AvatarFallback>{getInitials(lead.name)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {lead.company}
                    </p>
                  </div>
                  <Badge className={getRecentLeadStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">
                    {lead.email}
                  </span>
                  <span className="text-sm font-medium">
                    {formatCurrency(lead.value)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {lead.lastContact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
