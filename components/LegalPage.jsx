const LegalPage = ({ title, updated, children }) => {
  return (
    <article className="bg-white px-[5vw] pb-20 pt-32 phone:pb-14 phone:pt-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Legal
        </p>
        <h1 className="section-header mt-3 text-[#0f3d2e]">{title}</h1>
        <div className="mt-4 h-1 w-16 bg-secondary" />
        {updated && (
          <p className="mt-4 text-sm font-medium text-slate-500">{updated}</p>
        )}
        <div className="legal-content mt-10 flex flex-col gap-5 text-base leading-relaxed text-slate-700">
          {children}
        </div>
      </div>
    </article>
  );
};

export default LegalPage;
