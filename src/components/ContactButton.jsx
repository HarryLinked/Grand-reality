import Icon from './Icon.jsx';

export default function ContactButton({
  children = '',
  className = 'btn btn-primary',
  subject = '',
  icon = 'ArrowUpRight',
  iconSize = 17,
  onClick,
  ...rest
}) {
  const openContactModal = () => {
    onClick?.();
    window.dispatchEvent(new CustomEvent('open-contact-modal', { detail: { subject } }));
  };

  return (
    <button className={className} type="button" onClick={openContactModal} {...rest}>
      {children}
      {icon && <Icon name={icon} size={iconSize} />}
    </button>
  );
}
