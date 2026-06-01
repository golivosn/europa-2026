import { ALERTS } from '../data/trip';

export function Alerts() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <h2 className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase mb-3 flex items-center gap-1.5">
        <span>⚠</span> No olvidar
      </h2>
      <ul className="space-y-2.5">
        {ALERTS.map(alert => (
          <li key={alert.id} className="text-sm text-amber-900 leading-snug flex items-start gap-2">
            <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
            <span>{alert.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
