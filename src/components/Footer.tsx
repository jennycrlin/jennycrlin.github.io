export function Footer() {
  const isVercel = process.env.VERCEL === "1";
  const resumeHref = isVercel
    ? "/images/resume/chiehru_resume_vercel.pdf"
    : "/images/resume/chiehru-resume.pdf";

  return (
    <footer className="site-footer">
      <div className="left">
        <h3>Let&apos;s work together</h3>
        <p>jennycrlin.work@gmail.com</p>
      </div>
      <div className="right">
        <a href="https://www.linkedin.com/in/chiehrulin/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={resumeHref} target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="mailto:jennycrlin.work@gmail.com">Email</a>
      </div>
    </footer>
  );
}
