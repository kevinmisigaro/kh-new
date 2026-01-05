"use client";

import { Display, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
  },
});

export default function Home() {
  const styles = useStyles();

  return (
    <div className={styles.content}>
      <Display>
        Welkom op KlantHub
      </Display>
    </div>
  );
}
