"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="pabrax-theme"
      disableTransitionOnChange={true}
      forcedTheme={undefined}
    >
      {children}
    </ThemeProvider>
  );
}
