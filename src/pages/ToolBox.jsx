import { Construction } from "lucide-react";

export default function ToolBox() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <Construction size={32} />
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          ToolBox
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Coming soon. This feature is currently under development.
        </p>
      </div>
    </div>
  );
}