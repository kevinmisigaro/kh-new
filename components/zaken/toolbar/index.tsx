import {
  Button,
  CompoundButton,
  makeStyles,
  SearchBox,
  Switch,
} from "@fluentui/react-components";
import { Add16Filled, Briefcase16Filled } from "@fluentui/react-icons";
import { useState } from "react";

const useStyles = makeStyles({
  container: {
    background: "#f0f0f0",
    borderRadius: "5px",
    padding: "10px 10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    columnGap: "20px",
  },
  toolbarLeft: {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
  },
  toolbarRight: {
    display: "flex",
    alignItems: "center",
    columnGap: "20px",
  },
});

function ZakenToolbar() {
  const styles = useStyles();

  const [checked2, setChecked2] = useState(false);
  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2(e.target.checked);
  };
  const checkedString2 = checked2 ? "checked" : "unchecked";
  return (
    <div className={styles.container}>
      <div className={styles.toolbarLeft}>
        <CompoundButton
          icon={<Briefcase16Filled />}
          size="small"
          secondaryContent="Zaken"
        >
          <b>38</b>
        </CompoundButton>
        <Button appearance="primary" icon={<Add16Filled />}>
          Nieuw
        </Button>
        <Switch
          checked={checked2}
          label={`Zaken`}
          labelPosition="above"
          onChange={onChange2}
        />
        <Switch
          checked={checked2}
          label={`Melder`}
          labelPosition="above"
          onChange={onChange2}
        />
        <Switch
          checked={checked2}
          label={`Auteur`}
          labelPosition="above"
          onChange={onChange2}
        />
      </div>
      <div className={styles.toolbarRight}>
        <SearchBox />
        <Button appearance="outline">Export</Button>
      </div>
    </div>
  );
}

export default ZakenToolbar;
