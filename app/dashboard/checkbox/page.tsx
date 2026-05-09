"use client";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useState } from "react";

export default function Page() {
  const [terms, setTerms] = useState(false);

  return (
    <div>
      <FieldGroup className="mx-auto w-56">
        <Field orientation="horizontal" data-invalid>
          <Checkbox
            checked={terms}
            onCheckedChange={(value: boolean) => setTerms(value)}
            id="terms-checkbox-invalid"
            name="terms-checkbox-invalid"
            aria-invalid
          />
          <FieldLabel htmlFor="terms-checkbox-invalid">
            Accept terms and conditions
          </FieldLabel>
        </Field>

        {terms ? (
          <Badge>Great!</Badge>
        ) : (
          <Badge variant="destructive">Warning!</Badge>
        )}
      </FieldGroup>
    </div>
  );
}
