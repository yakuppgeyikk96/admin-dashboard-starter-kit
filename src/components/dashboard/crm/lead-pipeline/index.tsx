import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import LeadPipelineContent from "./lead-pipeline-content";

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
