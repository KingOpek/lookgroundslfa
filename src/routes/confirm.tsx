import { createFileRoute } from "@tanstack/react-router";
import { ConfirmForm } from "@/components/confirm-form";
import { FieldExport } from "@/components/field-export";
import { FieldShell } from "@/components/field-shell";

export const Route = createFileRoute("/confirm")({ component: ConfirmPage });

function ConfirmPage() {
  return (
    <FieldShell kicker="Marshal trigger · under 30 seconds" title="Confirm Ground" extra={<FieldExport />}>
      <ConfirmForm />
    </FieldShell>
  );
}
