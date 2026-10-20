import { useState } from 'react';
import Icon from '../components/Icon.jsx';
import Field, { validate } from '../components/Field.jsx';
import { QuestionsBand } from '../components/ContactBand.jsx';
import { Btn, Eyebrow, IconBubble, WaveText } from '../components/Shared.jsx';
import channel_partner_hero from '../assets/channel-partner-new.png';
import homeaboutfinal from '../assets/home-about-image-final.webp';
import Interior from '../assets/Interior.png';
import { HeroCarousel } from '../components/Slider.jsx';

const benefits = [
  { icon: 'Handshake', title: 'Strong Brand Association', text: 'Partner with a trusted real estate brand known for quality and dependability.' },
  { icon: 'BarChart', title: 'Attractive Earnings & Incentives', text: 'Earn competitive commissions and enjoy exciting performance incentives.' },
  { icon: 'Megaphone', title: 'Marketing Support', text: 'Get access to marketing collaterals, project updates and dedicated support.' },
  { icon: 'Presentation', title: 'Training & Guidance', text: 'Regular training sessions and guidance from our experienced team.' },
  { icon: 'Users', title: 'Long Term Partnership', text: 'We believe in building relationships that grow for years to come.' },
];

const rules = {
  firstName: { required: true }, lastName: { required: true }, email: { required: true, type: 'email' },
  city: { required: true }, phone: { required: true, type: 'phone' }, experience: { required: true },
  company: { required: true }, idProof: { required: true }, about: { required: true },
};
const empty = Object.fromEntries(Object.keys(rules).map((k) => [k, '']));

export default function ChannelPartners() {
  const [v, setV] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => {
    const { name, value, files } = e.target;
    setV((s) => ({ ...s, [name]: files ? files[0]?.name || '' : value }));
    setErrors((s) => ({ ...s, [name]: undefined }));
  };
  const submit = (e) => {
    e.preventDefault();
    const errs = validate(v, rules);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    // TODO: POST the data (and the selected file as FormData) to your backend / form service
    setSent(true);
  };
  const f = (name) => ({ name, value: name === 'idProof' ? undefined : v[name], onChange: change, error: errors[name] });

  return (
    <>
      <section className="partner-hero">
        <HeroCarousel
          className="ph-img"
          label="Partner with Grand Reality"
          slides={[
            { src: channel_partner_hero, alt: 'Grand Reality channel partner network' },
            { src: homeaboutfinal, alt: 'A residential community built for families' },
            { src: Interior, alt: 'Modern residential interiors' },
          ]}
        />
        <div className="container ph-copy">
          <Eyebrow>Partner With Us</Eyebrow>
          <WaveText as="h1">Let’s Build<br />Success <em>Together.</em></WaveText>
          <p>Join our channel partner network and grow your business with a brand that delivers trust, quality and value.</p>
          <Btn href="#register">Become a Partner</Btn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="center-copy">
            <Eyebrow center both>Why Partner With Grand Reality</Eyebrow>
            <WaveText as="h2" className="h-md">Grow With A Brand You Can Trust</WaveText>
          </div>
          <div className="benefits">
            {benefits.map((b) => (
              <div className="benefit" key={b.title}>
                <IconBubble name={b.icon} size={36} className="xl" />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" id="register">
        <div className="reg">
          <div className="reg-copy">
            <Eyebrow>Join Our Network</Eyebrow>
            <h2 className="h-md">Channel Partner<br />Registration</h2>
            <span className="rule-blue" aria-hidden="true" />
            <p>Fill out the form and our team will get in touch with you shortly.</p>
          </div>

          {sent ? (
            <div className="form-done" role="status">
              <Icon name="CircleCheck" size={44} />
              <h3>Application received</h3>
              <p>Thank you, {v.firstName}. Our team will contact you shortly on {v.phone}.</p>
              <Btn variant="outline" icon={null} onClick={() => { setV(empty); setSent(false); }}>Submit another application</Btn>
            </div>
          ) : (
            <form className="reg-form" onSubmit={submit} noValidate>
              <Field label="First Name" required placeholder="Enter first name" autoComplete="given-name" {...f('firstName')} />
              <Field label="Last Name" required placeholder="Enter last name" autoComplete="family-name" {...f('lastName')} />
              <Field label="Email Address" type="email" required placeholder="Enter email address" autoComplete="email" {...f('email')} />
              <Field label="City" required placeholder="Enter your city" autoComplete="address-level2" {...f('city')} />
              <Field label="Phone Number" type="tel" required placeholder="Enter phone number" autoComplete="tel" {...f('phone')} />
              <Field label="Experience in Real Estate" as="select" required {...f('experience')}>
                <option value="">Select experience</option>
                <option>Less than 1 year</option>
                <option>1 – 3 years</option>
                <option>3 – 5 years</option>
                <option>5+ years</option>
              </Field>
              <Field label="Company Name" required placeholder="Enter company name" {...f('company')} />
              <Field label="Upload ID Proof (Aadhar / PAN / Passport)" type="file" required accept=".pdf,.jpg,.jpeg,.png" {...f('idProof')} />
              <div className="span-2">
                <Field label="Tell us about your business" as="textarea" rows={4} required placeholder="Write about your business" {...f('about')} />
              </div>
              <div className="span-2 form-foot">
                <Btn type="submit">Submit Application</Btn>
                <p className="secure"><Icon name="Lock" size={15} />Your information is secure with us and will not be shared.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      <div className="gap" />
      <QuestionsBand />
    </>
  );
}
