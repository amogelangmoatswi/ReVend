import * as React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth antialiased focus:scroll-auto", className)}
    >
      {children}
    </html>
  );
};

type MainProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Main = ({ children, className, id }: MainProps) => {
  return (
    <main
      className={cn(
        "max-w-none prose-p:m-0",
        "prose prose-neutral prose:font-sans dark:prose-invert",
        "sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl",
        "prose-headings:font-normal",
        "prose-strong:font-semibold",
        "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
        "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
        "prose-blockquote:not-italic",
        "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground",
        className
      )}
      id={id}
    >
      {children}
    </main>
  );
};

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section className={cn("py-4 md:py-8 lg:py-12 xl:py-16", className)} id={id}>
      {children}
    </section>
  );
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div 
      className={cn(
        "mx-auto max-w-7xl", 
        "p-2 sm:p-4 md:p-4 lg:p-8 xl:p-10", 
        className
      )} 
      id={id}
    >
      {children}
    </div>
  );
};

type ArticleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
};

const Article = ({
  children,
  className,
  id,
  dangerouslySetInnerHTML,
}: ArticleProps) => {
  return (
    <article
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      className={cn(
        "prose prose-neutral prose:font-sans dark:prose-invert",
        "sm:prose-base md:prose-lg lg:prose-xl xl:prose-2xl",
        "prose-headings:font-normal",
        "prose-p:mb-0",
        "prose-strong:font-semibold",
        "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
        "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
        "prose-blockquote:not-italic",
        "prose-pre:border prose-pre:bg-muted/25",
        className
      )}
      id={id}
    >
      {children}
    </article>
  );
};

export { Layout, Main, Section, Container, Article };
