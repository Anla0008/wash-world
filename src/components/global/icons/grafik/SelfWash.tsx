export default function SelfWash({ size = 24, className }: { size?: number; className?: string }) {
  return <img src="/icons/vask_selv.svg" width={size} height={size} className={className} alt="Vask selv bilen ikon" />;
}
