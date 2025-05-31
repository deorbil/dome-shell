import { bind, Variable } from "astal";
import { Gtk } from "astal/gtk3";
import AstalHyprland from "gi://AstalHyprland";

const hyprland = AstalHyprland.get_default();

const workspaces = Variable.derive([
  bind(hyprland, "workspaces"),
  bind(hyprland, "focusedWorkspace"),
]);

export function Workspaces() {
  return (
    <button className="workspaces">
      <box>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
          <button
            className={workspaces(([workspaces, focusedWorkspace]) =>
              [
                id === focusedWorkspace.id && "focused",
                workspaces.some((workspace) => id === workspace.id) && "active",
              ]
                .filter(Boolean)
                .join(" "),
            )}
            valign={Gtk.Align.CENTER}
          />
        ))}
      </box>
    </button>
  );
}
