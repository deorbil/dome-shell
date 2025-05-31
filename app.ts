#!/usr/bin/gjs -m
import { App } from "astal/gtk3";
import styles from "./styles/main.scss";
import { Bar } from "./widgets";

App.start({
  css: styles,
  main() {
    App.get_monitors().map(Bar);
  },
});
