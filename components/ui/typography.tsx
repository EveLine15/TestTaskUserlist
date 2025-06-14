export function TypographyMuted({ children }: { children: string }) {
  return (
    <p className="mb-1 inline-block rounded bg-slate-100 px-2 py-1 text-xs font-semibold tracking-widest text-slate-500 uppercase">
      {children}
    </p>
  );
}

export function TypographyP({ children }: { children: string }) {
  return (
    <p className="text-sm text-slate-700 md:text-base lg:text-lg">{children}</p>
  );
}

export function TypographyBlockquote({ children }: { children: string }) {
  return (
    <blockquote className="text-sm text-slate-700 italic md:text-base lg:text-lg">
      {children}
    </blockquote>
  );
}

export function TypographyH1({ children }: { children: string }) {
  return (
    <h1 className="mb-6 text-4xl font-bold text-purple-500 sm:text-2xl md:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: string }) {
  return <h2 className="text-lg font-semibold text-slate-900">{children}</h2>;
}
