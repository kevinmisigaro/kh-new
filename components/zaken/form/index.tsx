import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
  useRestoreFocusSource,
  useRestoreFocusTarget,
} from "@fluentui/react-components";
import { Add16Filled, Dismiss24Regular } from "@fluentui/react-icons";

export const NewZakenForm = (): JSXElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  // all Drawers need manual focus restoration attributes
  // unless (as in the case of some inline drawers, you do not want automatic focus restoration)
  const restoreFocusTargetAttributes = useRestoreFocusTarget();
  const restoreFocusSourceAttributes = useRestoreFocusSource();

  return (
    <div>
      <OverlayDrawer
        as="aside"
        {...restoreFocusSourceAttributes}
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
        position="end"
        style={{
          width: "82vw",
          marginTop: "5.5vh",
        }}
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<Dismiss24Regular />}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Nieuwe zaak
          </DrawerHeaderTitle>
        </DrawerHeader>

        <DrawerBody>
          <p>Drawer content</p>
        </DrawerBody>
      </OverlayDrawer>

      <Button
        appearance="primary"
        icon={<Add16Filled />}
        onClick={() => setIsOpen(true)}
      >
        Nieuw
      </Button>
    </div>
  );
};
