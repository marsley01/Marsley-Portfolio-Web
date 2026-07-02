export default function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Marsley Mash. All rights reserved.
        </p>
        <p className="text-sm text-text-secondary">
          Built with purpose by{" "}
          <a
            href="https://github.com/marsley01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-2 hover:text-accent transition-colors"
          >
            Mash
          </a>
        </p>
      </div>
    </footer>
  );
}
