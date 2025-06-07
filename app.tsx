#!/usr/bin/gjs -m
import { App } from "astal/gtk3";
import styles from "styles/main.scss";
import { Bar } from "widgets";
import { Monitor } from "lib/monitor";

App.start({
  css: styles,
  instanceName: "dome-shell",
  main() {
    Monitor.map((monitor) => <Bar monitor={monitor} />);
  },
});
