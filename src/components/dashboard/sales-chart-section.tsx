import SalesChart from "@/components/charts/sales-chart";

export default function SalesChartSection() {
  return (
    <div className="bg-card rounded-lg border p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-card-foreground">
          Total Sales
        </h2>
      </div>
      <SalesChart />
    </div>
  );
}
