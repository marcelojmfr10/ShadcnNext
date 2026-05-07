"use client";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { IconGitBranch } from "@tabler/icons-react";
import { CircleFadingArrowUpIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>
      <Button onClick={() => console.log("hola mundo")}>Click Me</Button>
      <Button variant="success">success</Button>
      <Button capitalize={false}>capitalize</Button>
      <Button capitalize={true}>capitalize</Button>

      <Button variant="outline" size="icon">
        <CircleFadingArrowUpIcon />
      </Button>

      <Button variant="outline" size="sm">
        <IconGitBranch /> New Branch
      </Button>

      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Generating
      </Button>
      <Button variant="secondary" disabled>
        Downloading
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  );
}
