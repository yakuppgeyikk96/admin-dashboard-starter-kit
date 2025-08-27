import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LEAD_STATUSES } from "@/constants/leads";

export default function LeadOverview() {
  const statusCounts = {
    New: 45,
    Qualified: 23,
    Proposal: 18,
    Negotiation: 12,
    "Closed Won": 8,
    "Closed Lost": 5,
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Status Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {LEAD_STATUSES.map((status) => (
            <div key={status.value} className="text-center">
              <div className="text-2xl font-bold mb-2">
                {statusCounts[status.value] || 0}
              </div>
              <Badge className={status.color} variant="secondary">
                {status.label}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
