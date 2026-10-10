import { AppMode } from "../types";

interface ModeToggleProps {
  mode: AppMode;
  onChange: (mode: AppMode) => void;
  communityEnabled?: boolean;
}

export function ModeToggle({
  mode,
  onChange,
  communityEnabled = true,
}: ModeToggleProps) {
  return (
    <div className="mode-toggle" role="tablist" aria-label="Application mode">
      <button
        type="button"
        role="tab"
        aria-selected={mode === "search"}
        className={mode === "search" ? "mode-tab active" : "mode-tab"}
        onClick={() => onChange("search")}
      >
        Search
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === "add"}
        className={mode === "add" ? "mode-tab active" : "mode-tab"}
        onClick={() => onChange("add")}
        disabled={!communityEnabled}
        title={
          communityEnabled
            ? "Add words to your community dictionary"
            : "Configure Firebase to enable adding words"
        }
      >
        Add
      </button>
    </div>
  );
}
