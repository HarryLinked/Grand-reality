import { useState } from 'react';
import { supabase } from '../supabase.js';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const change = (event) => {
    setValues((current) => ({ ...current, [event.target.name]: event.target.value }));
    setErrors((current) => ({ ...current, [event.target.name]: undefined }));
    setSubmitError('');
  };

  const submit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(values, rules);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length) return;

    if (!supabase) {
      setSubmitError('Message service is unavailable. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const { error } = await supabase.from('enquiries').insert({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      });

      if (error) {
        console.error('Contact form submission failed:', error);
        setSubmitError('We could not send your message. Please try again later.');
        return;
      }

      setSent(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setSubmitError('We could not send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
      {submitError && <p className="form-submit-error span-2" role="alert">{submitError}</p>}
      <div className="span-2">
        <Btn type="submit" icon={isSubmitting ? null : 'Send'} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Btn>
      </div>
    </form>
  );
}
