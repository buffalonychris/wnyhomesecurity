type DemoDashboardLinkVariant = 'link' | 'button' | 'tileCta';

type DemoDashboardLinkProps = {
  href?: string;
  label?: string;
  variant?: DemoDashboardLinkVariant;
  className?: string;
};

const DEFAULT_DEMO_HREF = '/demos/ha-gold-dashboard/HA_Gold_Dashboard_Demo_REV01.html';

const variantClasses: Record<DemoDashboardLinkVariant, string> = {
  link: 'demo-link demo-link--inline',
  button: 'demo-link demo-link--button',
  tileCta: 'demo-link demo-link--button demo-link--tile',
};

const DemoDashboardLink = ({
  href = DEFAULT_DEMO_HREF,
  label = "See the dashboard you'll use",
  variant = 'link',
  className,
}: DemoDashboardLinkProps) => {
  const classes = [variantClasses[variant], className].filter(Boolean).join(' ');
  return (
    <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
};

export default DemoDashboardLink;
