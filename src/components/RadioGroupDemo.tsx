import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const types = [
  {
    id: "todo",
    name: "Todo",
    description: "A new task to be completed",
    color: "bg-red-500",
  },
  {
    id: "inprogress",
    name: "In Progress",
    description: "A task that is currently being worked on",
    color: "bg-yellow-500",
  },
  {
    id: "done",
    name: "Done",
    description: "A task that has been completed",
    color: "bg-green-500",
  },
];

export function RadioGroupDemo() {
  return (
    <div className="w-full py-4">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
