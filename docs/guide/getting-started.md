<!-- markdownlint-disable MD013 MD036 -->

# Getting Started

## Installation

::: details Arch Linux

```sh
git clone https://github.com/deorbil-aur/dome-shell-git.git
cd dome-shell-git
makepkg -si
```

:::

:::: details Building from Source {open}

**Prerequisites**

Install the following tools:

- [git](https://git-scm.com/)
- [npm](https://nodejs.org/)

Install the following dependencies:

- [aylurs-gtk-shell](https://aylur.github.io/ags/)

**Bundling**

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

::::

## Usage

To start the shell, you can manually run the following command:

```sh
hyprctl dispatch exec dome-shell
```

To start the shell automatically on login, you can add the following line to your `~/.config/hypr/hyprland.conf` file:

```txt
exec-once = dome-shell
```

::: warning
Make sure to have `dome-shell` in your `PATH` otherwise provide the full path to the executable!
:::
