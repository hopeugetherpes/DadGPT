import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className={`site-container page-hero-grid${aside ? " has-aside" : ""}`}>
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display page-title">{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}
