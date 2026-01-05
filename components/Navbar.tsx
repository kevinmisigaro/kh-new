import { DrawerProps } from "@fluentui/react-components";
import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  Hamburger,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavItem,
  NavSectionHeader,
} from "@fluentui/react-components";

import {
  Tooltip,
  makeStyles,
  tokens,
  useId,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import {
  Apps24Regular,
  ChartMultiple24Regular,
  Briefcase24Regular,
  Timer24Filled,
  DocumentBulletListClock24Regular,
  DatabaseSearch24Regular,
  ArrowClockwiseDashes24Regular,
  ArrowSync24Regular,
  PeopleTeam24Regular,
  AppsList24Regular,
  CalendarArrowCounterclockwise24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  nav: {
    minWidth: "260px",
  },
  content: {
    flex: "1",
    padding: "5px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

interface MenuItem {
  icon: JSX.Element;
  label: string;
  link: string;
  anchor: string;
}

interface MenuItems {
  [key: string]: MenuItem[];
}

type DrawerType = Required<DrawerProps>["type"];

export const Navbar = () => {
  const styles = useStyles();

  const [isOpen, setIsOpen] = React.useState(true);
  const [enabledLinks, setEnabledLinks] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");
  const [isMultiple, setIsMultiple] = React.useState(true);

  // Tabster prop used to restore focus to the navigation trigger for overlay nav drawers
  const restoreFocusTargetAttributes = useRestoreFocusTarget();

  const linkDestination = enabledLinks ? "https://www.bing.com" : "";

  const klantHubMenuItems: MenuItems = {
    Werk: [
      {
        icon: <Apps24Regular style={{ color: "#878483" }} />,
        label: "Apps",
        link: "/apps",
        anchor: "apps",
      },
      {
        icon: <ChartMultiple24Regular style={{ color: "#878483" }} />,
        label: "Rapportage",
        link: "/rapportage",
        anchor: "rapportage",
      },
    ],
    Service: [
      {
        icon: <Briefcase24Regular style={{ color: "#878483" }} />,
        label: "Zaken",
        link: "/zaken",
        anchor: "zaken",
      },
      {
        icon: <Timer24Filled style={{ color: "#878483" }} />,
        label: "Afspraak",
        link: "/afspraak",
        anchor: "afspraak",
      },
      {
        icon: <DocumentBulletListClock24Regular style={{ color: "#878483" }} />,
        label: "Dienstenkaart",
        link: "/dienstenkaart",
        anchor: "dienstenkaart",
      },
    ],
    Onboarding: [
      {
        icon: <Apps24Regular style={{ color: "#878483" }} />,
        label: "Planner",
        link: "/noplanner",
        anchor: "planner",
      },
      {
        icon: <Apps24Regular style={{ color: "#878483" }} />,
        label: "Testmonitor",
        link: "/notestmonitor",
        anchor: "testmonitor",
      },
    ],
    Kennis: [
      {
        icon: <DatabaseSearch24Regular style={{ color: "#878483" }} />,
        label: "Kennisbank",
        link: "/kennisbank",
        anchor: "kennisbank",
      },
      {
        icon: <ArrowClockwiseDashes24Regular style={{ color: "#878483" }} />,
        label: "Procesgebied",
        link: "/procesgebied",
        anchor: "procesgebied",
      },
      {
        icon: <ArrowSync24Regular style={{ color: "#878483" }} />,
        label: "Processen",
        link: "/processen",
        anchor: "processen",
      },
      {
        icon: <PeopleTeam24Regular style={{ color: "#878483" }} />,
        label: "Werkprocessen",
        link: "/dialogen",
        anchor: "werkprocessen",
      },
      {
        icon: <PeopleTeam24Regular style={{ color: "#878483" }} />,
        label: "Rollen",
        link: "/rollen",
        anchor: "rollen",
      },
      {
        icon: <PeopleTeam24Regular style={{ color: "#878483" }} />,
        label: "Beveiligings Rollen",
        link: "/beveiligingsrol",
        anchor: "beveiligingsrol",
      },
    ],
    VersieBeheer: [
      {
        icon: <AppsList24Regular style={{ color: "#878483" }} />,
        label: "Releasenotes",
        link: "/releasenotes",
        anchor: "releasenotes",
      },
      {
        icon: <CalendarArrowCounterclockwise24Regular style={{ color: "#878483" }} />,
        label: "Routekaart",
        link: "/routekaart",
        anchor: "routekaart",
      },
    ],
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="2"
        defaultSelectedCategoryValue=""
        open={isOpen}
        type={type}
        multiple={isMultiple}
        className={styles.nav}
      >
        <NavDrawerHeader>
          <Tooltip content="Close Navigation" relationship="label">
            <Hamburger onClick={() => setIsOpen(!isOpen)} />
          </Tooltip>
        </NavDrawerHeader>

        <NavDrawerBody>
          {Object.entries(klantHubMenuItems).map(([sectionName, items], sectionIndex) => (
            <React.Fragment key={sectionName}>
              <NavSectionHeader>{sectionName}</NavSectionHeader>
              {items.map((item, itemIndex) => (
                <NavItem
                  key={item.anchor}
                  href={item.link}
                  icon={item.icon}
                  value={`${sectionIndex}-${itemIndex}`}
                >
                  {item.label}
                </NavItem>
              ))}
            </React.Fragment>
          ))}
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        <Tooltip content="Toggle navigation pane" relationship="label">
          <Hamburger
            onClick={() => setIsOpen(!isOpen)}
            {...restoreFocusTargetAttributes}
            aria-expanded={isOpen}
          />
        </Tooltip>
        <div className={styles.field}>
        </div>
      </div>
    </div>
  );
};