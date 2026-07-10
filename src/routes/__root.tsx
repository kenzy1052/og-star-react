import { Outlet, Link, createRootRoute, useRouter, HeadContent } from "@tanstack/react-router";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "OG Star Travel & Tour — Your Gateway to the World" },
      {
        name: "description",
        content:
          "Premium international travel, work abroad, Dubai opportunities, visa support and curated tours from Accra, Ghana. Concierge-grade service for every journey.",
      },
      {
        name: "keywords",
        content:
          "travel agency Ghana, travel agency Accra, visa support Accra, work abroad Ghana, international tours Ghana, Dubai opportunities Ghana, OG Star Travel, travel agent Accra, work travel Ghana, study abroad Ghana, tour packages Ghana, Ghana tour operator, local tours Ghana, flight booking Ghana, relocation services Ghana, travel and tour company Accra",
      },
      { name: "author", content: "OG Star Travel & Tour" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "OG Star Travel & Tour" },
      { property: "og:locale", content: "en_GH" },
    ],
  }),
  component: () => (
    <>
      <HeadContent />
      <Outlet />
      <FloatingWhatsApp />
    </>
  ),
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
