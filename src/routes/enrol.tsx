import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EnrolForm } from "@/components/enrol-form";
import { FieldExport } from "@/components/field-export";
import { FieldShell } from "@/components/field-shell";
import { KoboFrame } from "@/components/kobo-frame";
import { Button } from "@/components/ui/button";
import { KOBO_ENROL_URL } from "@/lib/kobo";

export const Route = createFileRoute("/enrol")({ component: EnrolPage });

function EnrolPage() {
  const [backup, setBackup] = useState(false);
  return (
    <FieldShell
      kicker="Field intake · doorstep"
      title="Enrol a household"
      bleed={!backup}
      extra={
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" variant={!backup ? "default" : "secondary"} onClick={() => setBackup(false)}>
            Kobo form
          </Button>
          <Button size="sm" variant={backup ? "default" : "secondary"} onClick={() => setBackup(true)}>
            Backup form
          </Button>
          <FieldExport />
        </div>
      }
    >
      {backup ? (
        <EnrolForm />
      ) : (
        <KoboFrame url={KOBO_ENROL_URL} title="LookGround household enrolment" />
      )}
    </FieldShell>
  );
}
