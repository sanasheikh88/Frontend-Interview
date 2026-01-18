import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BlogSidebar() {
  return (
    <Card className="h-full">
      <CardContent className="p-4 space-y-4">
        <div className="rounded-lg border p-3 space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <Badge variant="secondary">Technical</Badge>
            <span>18 Jan 2026</span>
          </div>

          <h3 className="text-lg font-semibold">Upskill</h3>

          <p className="text-sm text-muted-foreground">
            How to crack versant round.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}