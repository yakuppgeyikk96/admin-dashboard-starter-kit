import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import SalesChart from "@/shared/components/charts/SalesChart";
import { SALES_CHART_DATA } from "@/features/analytics/constants/salesChartData";

export default function EcommerceSalesChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Sales</CardTitle>
      </CardHeader>
      <CardContent>
        <SalesChart data={SALES_CHART_DATA} />
      </CardContent>
    </Card>
  );
}
