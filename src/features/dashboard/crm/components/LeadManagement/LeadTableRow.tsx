import { Avatar, AvatarFallback } from "@/shared/components/ui/avatar";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Phone,
  Mail,
  Edit,
  MoreHorizontal,
  Calendar,
  TrendingUp,
} from "lucide-react";
import TableCell from "@/shared/components/common/table/table-cell";
import { Lead } from "@/features/dashboard/crm/types/Lead";
import { getRecentLeadStatusColor } from "@/features/dashboard/crm/utils/getRecentLeadStatusColor";
import { getRecentLeadPriorityColor } from "@/features/dashboard/crm/utils/getRecentLeadPriorityColor";
import { formatCurrency, getScoreColor, getInitials } from "@/shared/lib/utils";

interface LeadTableRowProps {
  lead: Lead;
}

export default function LeadTableRow({ lead }: LeadTableRowProps) {
  return (
    <>
      <TableCell>
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="text-xs">
              {getInitials(lead.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{lead.name}</div>
            <div className="text-sm text-muted-foreground">{lead.email}</div>
            {lead.phone && (
              <div className="text-xs text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {lead.phone}
              </div>
            )}
          </div>
        </div>
      </TableCell>

      <TableCell>
        <div className="font-medium">{lead.company}</div>
        <div className="text-sm text-muted-foreground">{lead.source}</div>
      </TableCell>

      <TableCell>
        <Badge className={getRecentLeadStatusColor(lead.status)}>
          {lead.status}
        </Badge>
      </TableCell>

      <TableCell>
        <Badge className={getRecentLeadPriorityColor(lead.priority)}>
          {lead.priority}
        </Badge>
      </TableCell>

      <TableCell>
        <div className="font-medium">{formatCurrency(lead.value)}</div>
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <TrendingUp className={`w-4 h-4 ${getScoreColor(lead.score)}`} />
          <span className={`font-medium ${getScoreColor(lead.score)}`}>
            {lead.score}
          </span>
        </div>
      </TableCell>

      <TableCell>
        {lead.assignedTo ? (
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarFallback className="text-xs">
                {getInitials(lead.assignedTo)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{lead.assignedTo}</span>
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">Unassigned</span>
        )}
      </TableCell>

      <TableCell>
        <div className="text-sm">{lead.lastContact}</div>
        {lead.nextFollowUp && (
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {lead.nextFollowUp}
          </div>
        )}
      </TableCell>

      <TableCell>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            <Mail className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <Phone className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <Edit className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="ghost">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </>
  );
}
