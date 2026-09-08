import { SVGProps } from 'react';

export type IconName =
  | 'pin' | 'shield' | 'pulse' | 'user' | 'route' | 'wrench' | 'video' | 'bell'
  | 'chart' | 'box' | 'car' | 'truck' | 'van' | 'building' | 'logistics' | 'machine'
  | 'platform' | 'apps' | 'hardware' | 'api' | 'lock' | 'check' | 'arrow';

const PATHS: Record<IconName, JSX.Element> = {
  pin: <><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" /><circle cx="12" cy="9" r="2.5" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" /><path d="M9 12l2 2 4-4" /></>,
  pulse: <path d="M3 12h4l2-6 4 12 2-6h6" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>,
  route: <><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H15a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6.5" /></>,
  wrench: <path d="M15 4a5 5 0 0 0-6 6l-6 6 3 3 6-6a5 5 0 0 0 6-6l-3 3-3-3 3-3Z" />,
  video: <><rect x="3" y="6" width="12" height="12" rx="2" /><path d="M15 10l6-3v10l-6-3" /></>,
  bell: <><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  box: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M4 7.5l8 4.5 8-4.5M12 21v-9" /></>,
  car: <><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" /><path d="M4 13h16v4H4z" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /></>,
  truck: <><path d="M3 6h11v9H3z" /><path d="M14 9h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></>,
  van: <><path d="M3 7h13v8H3z" /><path d="M16 10h3l2 2v3h-5z" /><circle cx="7" cy="17" r="1.6" /><circle cx="17" cy="17" r="1.6" /></>,
  building: <><path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" /><path d="M14 21v-9h4a2 2 0 0 1 2 2v7" /><path d="M8 7h2M8 11h2M8 15h2" /></>,
  logistics: <><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" opacity=".4" /></>,
  machine: <><path d="M3 18h10v-4l4 2 4-6" /><circle cx="6" cy="18" r="2" /><path d="M13 14V8h4l3 4" /></>,
  platform: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M3 9h18M8 20h8M12 16v4" /></>,
  apps: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
  hardware: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></>,
  api: <><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" /><circle cx="12" cy="12" r="3" /></>,
  lock: <><rect x="3" y="11" width="18" height="10" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {PATHS[name]}
    </svg>
  );
}
