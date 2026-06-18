interface ColoredBoxProps {
  color: string
  width?: number
  height?: number
  label?: string
  borderRadius?: number
  onClick?: () => void
}

export default function ColoredBox({
  color,
  width = 80,
  height = 80,
  label,
  borderRadius = 8,
  onClick,
}: ColoredBoxProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius,
          border: 'none',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}