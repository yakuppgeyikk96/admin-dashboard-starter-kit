import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { DEAL_STAGES } from "@/features/crm/constants/dealStages";

export default function DealStages() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Deal Stages</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {DEAL_STAGES.map((deal) => (
            <div key={deal.stage} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Badge className={deal.color}>{deal.stage}</Badge>
              </div>
              <span className="font-semibold">{deal.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
