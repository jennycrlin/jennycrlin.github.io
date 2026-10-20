export function NavRevealText({ children }: { children: string }) {
  return (
    <span className="nav-reveal">
      <span className="nav-reveal-text" data-text={children}>
        {children}
      </span>
    </span>
  );
}
