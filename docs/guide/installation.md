# Installation

## Building from Source

### Prerequisites

Install the following tools:

- [git](https://git-scm.com/)
- [npm](https://nodejs.org/)

Install the following dependencies:

- [aylurs-gtk-shell](https://aylur.github.io/ags/)

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
