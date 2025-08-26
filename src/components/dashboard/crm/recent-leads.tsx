import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const recentLeads = [
  {
    id: 1,
    name: "John Smith",
    company: "Tech Corp",
    email: "john@techcorp.com",
    status: "Qualified",
    value: "$25K",
    lastContact: "2 hours ago",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Design Studio",
    email: "sarah@designstudio.com",
    status: "New",
    value: "$15K",
    lastContact: "4 hours ago",
  },
  {
    id: 3,
    name: "Mike Wilson",
    company: "Marketing Plus",
    email: "mike@marketingplus.com",
    status: "Proposal",
    value: "$45K",
    lastContact: "1 day ago",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300";
    case "Qualified":
      return "bg-green-100 text-green-800 dark:bg-green-950/50 dark:text-green-300";
    case "Proposal":
      return "bg-purple-100 text-purple-800 dark:bg-purple-950/50 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
};

export default function RecentLeads() {
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
                <AvatarFallback>
                  {lead.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {lead.company}
                    </p>
                  </div>
                  <Badge className={getStatusColor(lead.status)}>
                    {lead.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-muted-foreground">
                    {lead.email}
                  </span>
                  <span className="text-sm font-medium">{lead.value}</span>
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
