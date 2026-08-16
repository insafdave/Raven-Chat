function PageLoader() {
  return (
    <div className="h-screen flex items-center justify-center bg-base-100">
        <div className="relative flex items-center justify-center">

            {/* Outer spinning ring */}
            <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"/>

            {/* Abstract Orb */}
<svg
  viewBox="0 0 100 100"
  className="w-11 h-11 text-primary"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <radialGradient id="orb" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="currentColor" stopOpacity="0.95" />
      <stop offset="45%" stopColor="currentColor" stopOpacity="0.55" />
      <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
    </radialGradient>

    <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  {/* Outer glow */}
  <circle
    cx="50"
    cy="50"
    r="30"
    fill="currentColor"
    opacity="0.08"
    filter="url(#glow)"
  />

  {/* Main orb */}
  <circle
    cx="50"
    cy="50"
    r="25"
    fill="url(#orb)"
    stroke="currentColor"
    strokeWidth="1.5"
    opacity="0.9"
  />

  {/* Inner core */}
  <circle
    cx="50"
    cy="50"
    r="10"
    fill="currentColor"
    opacity="0.18"
  />

  {/* Orbit */}
  <ellipse
    cx="50"
    cy="50"
    rx="35"
    ry="14"
    stroke="currentColor"
    strokeWidth="1.2"
    opacity="0.45"
    transform="rotate(-25 50 50)"
  />

  {/* Highlight */}
  <circle
    cx="42"
    cy="40"
    r="4"
    fill="currentColor"
    opacity="0.8"
  />
</svg>

        </div>
    </div>
  );
}
export default PageLoader;