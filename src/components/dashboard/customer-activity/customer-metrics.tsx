import { Users, UserPlus, TrendingUp, Globe } from "lucide-react";
import { CUSTOMER_METRICS } from "@/shared/constants/customer-activity";

export default function CustomerMetrics() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="text-center p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div className="text-lg font-bold text-foreground">
          {CUSTOMER_METRICS.totalCustomers.toLocaleString()}
        </div>
        <div className="text-xs text-muted-foreground">Total Customers</div>
      </div>

      <div className="text-center p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          <UserPlus className="w-5 h-5 text-green-600" />
        </div>
        <div className="text-lg font-bold text-foreground">
          +{CUSTOMER_METRICS.newCustomersThisMonth}
        </div>
        <div className="text-xs text-muted-foreground">This Month</div>
      </div>

      <div className="text-center p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
        </div>
        <div className="text-lg font-bold text-foreground">
          {CUSTOMER_METRICS.retentionRate}%
        </div>
        <div className="text-xs text-muted-foreground">Retention Rate</div>
      </div>

      <div className="text-center p-3 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center mb-2">
          <Globe className="w-5 h-5 text-purple-600" />
        </div>
        <div className="text-lg font-bold text-foreground">
          +{CUSTOMER_METRICS.growthRate}%
        </div>
        <div className="text-xs text-muted-foreground">Growth Rate</div>
      </div>
    </div>
  );
}
