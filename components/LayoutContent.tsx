'use client';

import { makeStyles } from "@fluentui/react-components";
import { Navbar } from "@/components/Navbar";
import Topbar from "@/components/Topbar";

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100vh - 6vh)',
  },
  content:{
    flex: 1,
    padding: '20px',
  }
});

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const styles = useStyles();

  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <Navbar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
}
