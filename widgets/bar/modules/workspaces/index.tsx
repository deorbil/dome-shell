import { bind, Variable } from "astal";
import { Gtk } from "astal/gtk3";
import AstalHyprland from "gi://AstalHyprland";
import { clamp, lerp } from "lib/math";
import { Tween } from "lib/tween";

const hyprland = AstalHyprland.get_default();

const focusedWorkspace = Tween.derive(
  1000 / 60,
  10,
  bind(hyprland, "focusedWorkspace"),
  (workspace) => workspace.id,
);

const workspaces = bind(hyprland, "workspaces").as((workspaces) =>
  Math.max(...workspaces.map((workspace) => workspace.id)),
);

const widthMultiplier = bind(workspaces).as((workspaces) =>
  workspaces <= 2 ? 3.625 : workspaces <= 5 ? 3.25 : 2.75,
);

export function Workspace({ id }: { id: number }) {
  const expansion = bind(focusedWorkspace).as((focusedWorkspace) => {
    const distance = Math.abs(id - focusedWorkspace);
    const expansion = clamp(1 - distance, 0, 1);
    return expansion;
  });

  const width = Variable.derive([bind(expansion), bind(widthMultiplier)]);

  return (
    <box
      widthRequest={bind(width).as(([expansion, widthMultiplier]) =>
        Math.round(lerp(1, widthMultiplier, expansion) * 8),
      )}
      onDestroy={() => {
        width.drop();
      }}
    >
      <button
        opacity={bind(expansion).as((expansion) => lerp(0.5, 1, expansion))}
        widthRequest={bind(width).as(([expansion, widthMultiplier]) =>
          Math.round(
            lerp(0.75, 1, expansion) * lerp(1, widthMultiplier, expansion) * 8,
          ),
        )}
        heightRequest={bind(expansion).as(
          (expansion) => lerp(0.75, 1, expansion) * 8,
        )}
        valign={Gtk.Align.CENTER}
        halign={Gtk.Align.CENTER}
      />
    </box>
  );
}

export function Workspaces() {
  return (
    <button className="workspaces">
      <box spacing={5}>
        {bind(workspaces).as((workspaces) =>
          Array.from(
            { length: Math.min(workspaces + 1, 10) },
            (_, i) => i + 1,
          ).map((id) => <Workspace id={id} />),
        )}
      </box>
    </button>
  );
}
