import { Card, CardHeader, CardTitle } from "@/shared/components/ui/card";
import LeadPipelineContent from "./LeadPipelineContent";

export default function LeadPipeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Pipeline</CardTitle>
      </CardHeader>
      <LeadPipelineContent />
    </Card>
  );
}
