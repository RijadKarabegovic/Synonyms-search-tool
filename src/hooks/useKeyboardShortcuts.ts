import { useEffect } from "react";

interface KeyboardShortcutOptions {
  onFocusSearch?: () => void;
  onClear?: () => void;
  enabled?: boolean;
}

export function useKeyboardShortcuts({
  onFocusSearch,
  onClear,
  enabled = true,
}: KeyboardShortcutOptions) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        onFocusSearch?.();
      }

      if (event.key === "Escape") {
        onClear?.();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onClear, onFocusSearch]);
}
