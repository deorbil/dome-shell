# Installation

## Building from Source

### Prerequisites

::: details Arch Linux {open}

Install the following packages using your preferred AUR helper (such as `yay` or `paru`):

```txt
aylurs-gtk-shell
bluez
hyprland
networkmanager
xdg-desktop-portal-hyprland
```

:::

### Bundling

This will generate an executable `dome-shell` file in the `dist` directory.

```sh
git clone https://github.com/deorbil/dome-shell.git
cd dome-shell
npm run build
```

::: tip

Move the executable to a directory in your `PATH` (such as `/usr/local/bin` or `~/.local/bin`).

```sh
sudo cp dist/dome-shell /usr/local/bin/
cp dist/dome-shell ~/.local/bin/
```

:::
