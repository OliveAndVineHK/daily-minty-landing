import { cn } from '@/lib/utils';
import type { MappingRow, MappingTone } from '@/config/xero-integration';

const TONE: Record<MappingTone, { pill: string; arrow: string }> = {
  blue:  { pill: 'bg-[#2BA9E0]', arrow: 'text-[#2BA9E0]' },
  red:   { pill: 'bg-[#F0857C]', arrow: 'text-[#F0857C]' },
  green: { pill: 'bg-[#8DC63F]', arrow: 'text-[#8DC63F]' },
};

function Arrow({ direction, tone }: { direction: MappingRow['direction']; tone: MappingTone }) {
  return (
    <div className={cn('flex items-center justify-center', TONE[tone].arrow)} aria-hidden="true">
      <svg
        viewBox="0 0 80 12"
        className={cn('w-full max-w-[80px] h-3', direction === 'left' && 'rotate-180')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="2" y1="6" x2="72" y2="6" />
        <polyline points="66,2 72,6 66,10" />
      </svg>
    </div>
  );
}

export default function XeroMapping({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: MappingRow[];
}) {
  return (
    <div className="w-full">
      {/* Column headers — the two products the rows map between. */}
      <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_120px_1fr] gap-2 md:gap-4 items-center mb-5">
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3FCFC0] text-white text-[11px] font-bold">
            {leftLabel}
          </span>
        </div>
        <div />
        <div className="flex justify-center">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#2BA9E0] text-white text-[11px] font-bold">
            {rightLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {rows.map((row, idx) => {
          // Extra space where the tone changes keeps the three mappings distinct.
          const startsNewGroup = idx > 0 && rows[idx - 1].tone !== row.tone;
          return (
            <div
              key={`${row.left}-${row.right}`}
              className={cn(
                'grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_120px_1fr] gap-2 md:gap-4 items-center',
                startsNewGroup && 'mt-4'
              )}
            >
              <span className="rounded-md bg-[#3FCFC0] text-white text-[10px] md:text-[11px] font-semibold leading-tight px-2 md:px-3 py-1.5 md:py-2 text-center">
                {row.left}
              </span>
              <Arrow direction={row.direction} tone={row.tone} />
              <span
                className={cn(
                  'rounded-md text-white text-[10px] md:text-[11px] font-semibold leading-tight px-2 md:px-3 py-1.5 md:py-2 text-center',
                  TONE[row.tone].pill
                )}
              >
                {row.right}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
