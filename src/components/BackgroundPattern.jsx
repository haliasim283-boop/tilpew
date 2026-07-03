import { useId } from 'react'

/**
 * Decorative route-map used behind the hero (and reused subtly elsewhere).
 * Pure SVG so it stays crisp at any size and needs no image assets.
 * `theme="dark"` (default) draws white art for navy/dark backgrounds;
 * `theme="light"` draws navy art for light/canvas backgrounds.
 */
export default function BackgroundPattern({ className = '', theme = 'dark', ink, accent = '#2563eb', accentLight = '#3b82f6' }) {
  const uid = useId()
  const isLight = theme === 'light'
  const inkColor = ink || (isLight ? '#1a2744' : '#ffffff')

  // Origin/destination nodes on a 1440 x 760 canvas
  const nodes = [
    [190, 560],
    [430, 300],
    [690, 520],
    [560, 170],
    [980, 250],
    [1230, 430],
    [1050, 630],
    [820, 360],
  ]

  // Curved connections between nodes (control points hand-tuned for nice arcs)
  const routes = [
    'M190,560 C360,420 300,330 430,300',
    'M430,300 C620,250 800,210 980,250',
    'M190,560 C420,560 560,540 690,520',
    'M690,520 C880,480 1080,470 1230,430',
    'M560,170 C700,250 760,300 820,360',
    'M1050,630 C1140,560 1190,500 1230,430',
  ]

  // Two "live" travelling routes drawn brighter with an animated dash
  const liveRoutes = [
    'M190,560 C360,420 300,330 430,300',
    'M430,300 C620,250 800,210 980,250',
  ]

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={`${uid}-glow`} cx="38%" cy="30%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity={isLight ? '0.12' : '0.30'} />
          <stop offset="55%" stopColor={accent} stopOpacity="0.05" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${uid}-dots`} width="34" height="34" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.1" fill={inkColor} fillOpacity={isLight ? '0.12' : '0.07'} />
        </pattern>
      </defs>

      {/* texture + glow */}
      <rect width="1440" height="760" fill={`url(#${uid}-dots)`} />
      <rect width="1440" height="760" fill={`url(#${uid}-glow)`} />

      {/* base routes */}
      <g fill="none" stroke={inkColor} strokeOpacity={isLight ? '0.14' : '0.16'} strokeWidth="1.4" strokeDasharray="5 9">
        {routes.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>

      {/* animated live routes */}
      <g fill="none" stroke={accentLight} strokeWidth="1.8" strokeLinecap="round">
        {liveRoutes.map((d, i) => (
          <path key={i} d={d} className="flightpath" style={{ animationDelay: `${i * -5}s` }} />
        ))}
      </g>

      {/* nodes */}
      <g>
        {nodes.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="9" fill={accent} fillOpacity={isLight ? '0.14' : '0.18'} />
            <circle cx={x} cy={y} r="3.4" fill={inkColor} fillOpacity={isLight ? '0.55' : '0.85'} />
          </g>
        ))}
      </g>

      {/* top-down airplane gliding along the network — rotated to match route bearing */}
      <g transform="translate(972,243) rotate(-5)">
        <path
          d="M0,-18 L2.5,-10 L18,0 L18,4 L2.5,1 L3,10 L7,13 L7,17 L0,15.5 L-7,17 L-7,13 L-3,10 L-2.5,1 L-18,4 L-18,0 L-2.5,-10 Z"
          fill={inkColor}
          fillOpacity={isLight ? '0.7' : '1'}
        />
      </g>
    </svg>
  )
}
