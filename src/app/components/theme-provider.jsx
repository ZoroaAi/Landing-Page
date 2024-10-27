"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function ThemeProvider({ children }){
    return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}