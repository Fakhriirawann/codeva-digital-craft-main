import { Outlet, Link, createRootRoute, HeadContent, Scripts, ScriptOnce } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { Preloader } from "@/components/site/Preloader";

import appCss from "../styles.css?url";

const themeScript = `(function(){try{var s=localStorage.getItem("webora-theme");var d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;if(d)r.classList.add("dark");r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Webora Studio — Premium Digital Agency for Web, Apps & Brand" },
      { name: "description", content: "Webora Studio is a digital agency crafting websites, mobile apps, UI/UX and brand identities for ambitious teams worldwide." },
      { name: "author", content: "Webora Studio" },
      { property: "og:title", content: "Webora Studio — Premium Digital Agency" },
      { property: "og:description", content: "Webora Studio crafts high-performance websites, mobile apps, and visual systems." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScriptOnce>{themeScript}</ScriptOnce>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
      <WhatsAppFab />
      <Preloader />
    </>
  );
}
