import { getTierBadgeClass, getTierLabel, PackageTierId } from '../data/pricing';
import { VerticalKey } from '../lib/verticals';

type Props = {
  tierId: PackageTierId;
  labelOverride?: string;
  className?: string;
  vertical?: VerticalKey;
};

const TierBadge = ({ tierId, labelOverride, className, vertical }: Props) => {
  const classes = ['tier-badge', getTierBadgeClass(tierId), className].filter(Boolean).join(' ');
  return <span className={classes}>{labelOverride ?? getTierLabel(tierId, vertical)}</span>;
};

export default TierBadge;
