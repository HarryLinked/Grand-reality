import { useState } from 'react';
import Icon from './Icon.jsx';
import Field, { validate } from './Field.jsx';
import { Btn } from './Shared.jsx';

const rules = {
  name: { required: true },
  email: { required: true, type: 'email' },
  phone: { required: true, type: 'phone' },
  message: { required: true },
};

export default function ContactForm({ subject = '' }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    subject,
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values, rules);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    // TODO: send to your backend / email service
    setSent(true);
  };

  const fieldProps = (name) => ({
    name,
    value: values[name],
    onChange: change,
    error: errors[name],
  });

  if (sent) {
    return (
      <div className="form-done" role="status">
        <Icon name="CircleCheck" size={44} />
        <h3>Message sent</h3>
        <p>Thank you, {values.name}. We’ll get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <Field label="Full Name" required placeholder="Full Name" autoComplete="name" {...fieldProps('name')} />
      <Field label="Email Address" type="email" required placeholder="Email Address" autoComplete="email" {...fieldProps('email')} />
      <Field label="Phone Number" type="tel" required placeholder="Phone Number" autoComplete="tel" {...fieldProps('phone')} />
      <Field label="Subject" placeholder="Subject" {...fieldProps('subject')} />
      <div className="span-2">
        <Field label="Your Message" as="textarea" rows={4} required placeholder="Your Message" {...fieldProps('message')} />
      </div>
      <div className="span-2"><Btn type="submit" icon="Send">Send Message</Btn></div>
    </form>
  );
}
