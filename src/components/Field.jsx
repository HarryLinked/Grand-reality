// Labelled input / select / textarea with inline error text.
export default function Field({ label, name, type = 'text', as = 'input', required, error, children, ...rest }) {
  const id = `f-${name}`;
  const Tag = as;
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={id}>{label}{required && <span className="req"> *</span>}</label>
      <Tag id={id} name={name} type={as === 'input' ? type : undefined} aria-invalid={!!error} aria-describedby={error ? `${id}-e` : undefined} {...rest}>
        {children}
      </Tag>
      {error && <span className="err" id={`${id}-e`}>{error}</span>}
    </div>
  );
}

export function validate(values, rules) {
  const errs = {};
  for (const [k, r] of Object.entries(rules)) {
    const v = (values[k] || '').toString().trim();
    if (r.required && !v) errs[k] = 'This field is required';
    else if (v && r.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) errs[k] = 'Enter a valid email address';
    else if (v && r.type === 'phone' && !/^[+\d][\d\s-]{7,15}$/.test(v)) errs[k] = 'Enter a valid phone number';
  }
  return errs;
}
