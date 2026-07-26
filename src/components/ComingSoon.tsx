import Link from "next/link";

export function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2>Case study coming soon</h2>
      <p>This project is currently being documented. Check back later.</p>
      <Link href="/">← Back to all projects</Link>
    </div>
  );
}
