"use client"

import React from 'react'
import {
  webLightTheme,
  FluentProvider,
} from "@fluentui/react-components";

function FluentUIProvider({ children }: { children: React.ReactNode }) {
  return (
    <FluentProvider theme={webLightTheme}>
        {children}
    </FluentProvider>
  )
}

export default FluentUIProvider