# Usage

To start the shell, you can manually run the following command:

```sh
hyprctl dispatch exec dome-shell
```

To start the shell automatically on login, you can add it to your `~/.config/hypr/hyprland.conf` file.

```txt
exec-once = dome-shell
```

::: warning
Make sure to have `dome-shell` in your `PATH` otherwise provide the full path to the executable!
:::
