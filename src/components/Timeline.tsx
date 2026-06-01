import type { TimelineItem } from '../data/timeline';
import { LegCard } from './LegCard';
import { InlineStay } from './InlineStay';

interface Props {
  items: TimelineItem[];
  today: string;
}

export function Timeline({ items, today }: Props) {
  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-ink-muted font-mono text-sm">
        Ningún tramo con ese filtro
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item, i) =>
        item.kind === 'leg' ? (
          <LegCard key={item.leg.id} leg={item.leg} isToday={item.leg.date === today} />
        ) : (
          <InlineStay key={`${item.city}-${i}`} {...item} />
        )
      )}
    </div>
  );
}
