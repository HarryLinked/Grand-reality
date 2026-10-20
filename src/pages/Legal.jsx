const copy = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'Grand Reality respects your privacy. We collect only the details you share through our enquiry, channel partner and newsletter forms, such as your name, phone number, email address and city.',
      'We use this information to respond to your enquiry, share project updates and improve our services. We do not sell your personal information to third parties.',
      'To ask us to update or delete your details, write to info@grandreality.in.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'Project images, layouts, specifications and prices shown on this website are indicative and may change without prior notice.',
      'Prices marked with * are starting prices and exclude registration, taxes and other statutory charges.',
      'Nothing on this website is an offer or contract. Please contact our team to confirm the latest availability, approvals and terms.',
    ],
  },
};

export default function Legal({ kind }) {
  const c = copy[kind];
  return (
    <section className="section legal-page">
      <div className="container narrow">
        <h1 className="h-lg">{c.title}</h1>
        {c.body.map((p) => <p key={p}>{p}</p>)}
        <p className="muted">Placeholder text – replace with your final legal copy.</p>
      </div>
    </section>
  );
}
