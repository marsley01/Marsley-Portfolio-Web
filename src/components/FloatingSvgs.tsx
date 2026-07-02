export default function FloatingSvgs() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute top-[15%] left-[10%] w-48 h-48 opacity-30 animate-float">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path fill="url(#fg1)" d="M100 20 L180 60 L180 140 L100 180 L20 140 L20 60 Z" stroke="rgba(128,128,128,0.2)" strokeWidth="0.8"/>
          <path fill="none" d="M100 20 L100 180 M180 60 L20 140 M180 140 L20 60" stroke="rgba(128,128,128,0.1)" strokeWidth="0.5"/>
        </svg>
      </div>
      <div className="absolute top-[70%] right-[8%] w-64 h-64 opacity-20 animate-float-reverse">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="fg2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <path fill="url(#fg2)" d="M100 10 L190 100 L100 190 L10 100 Z" stroke="rgba(128,128,128,0.2)" strokeWidth="0.8"/>
        </svg>
      </div>
    </div>
  );
}
