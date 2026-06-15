interface WaveDividerProps {
  from?: string
  to?: string
  flip?: boolean
}

export default function WaveDivider({ flip }: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16 lg:h-20"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1350,20 1440,40 L1440,80 L0,80 Z"
          fill={flip ? '#06264D' : '#ffffff'}
        />
      </svg>
    </div>
  )
}
