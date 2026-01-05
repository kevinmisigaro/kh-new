"use client";

import { ZakenTable } from "@/components/zaken/table";
import ZakenToolbar from "@/components/zaken/toolbar";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "8vh",
  },
})

function Page() {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <ZakenToolbar />
      <ZakenTable />
    </div>
  );
}

export default Page;
