export default function VacuumCleaner({ size = 24, className }: { size?: number; className?: string }) {
  return <img src="/icons/vacuum-cleaner.svg" width={size} height={size} className={className} alt="Vacuum Cleaner Icon" />;
}
