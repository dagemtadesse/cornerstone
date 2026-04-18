import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

import appCss from "../styles.css?url";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Cornerstone Advisory",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: () => {
    return (
      <RootDocument>
        <Outlet />
      </RootDocument>
    );
  },
});

function RootDocument({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#1C3659",
      },
    },
    typography: {
      fontFamily: '"IBM Plex Sans", sans-serif',
    },
  });

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script />
        <HeadContent />
      </head>
      <ThemeProvider theme={theme}>
        <body>
          <Header />
          {children}
          <Footer />

          <Scripts />
        </body>
      </ThemeProvider>
    </html>
  );
}
