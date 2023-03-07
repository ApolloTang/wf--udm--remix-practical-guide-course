# Styling Pages and Understanding the Root Route



*File: app/root.jsx*

```jsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "~/styles/main.css";    // <-- must load the stylesheet via javascript

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />  {/* the exported links function will inject <link/> element here */}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

// this function name is a reserved keyword
export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
```
