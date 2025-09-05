import { GEOGRAPHIC_DATA } from "@/shared/constants/customer-activity";

export default function GeographicDistribution() {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-foreground mb-3">
        Geographic Distribution
      </h4>
      <div className="space-y-2">
        {GEOGRAPHIC_DATA.map((region) => (
          <div
            key={region.region}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-muted-foreground">
              {region.region}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${region.percentage}%` }}
                />
              </div>
              <span className="text-sm font-medium text-foreground w-12 text-right">
                {region.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
