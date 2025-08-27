export default function MenuItem({ icon, label, click }: { icon?: React.ReactNode; label?: string; click?: () => void }) {
  return (
    <div className="group __menu-item hover:bg-[var(--menu-secondary-hover)] rounded-lg px-2.5 py-2 touch:p-1.5 cursor-pointer w-full" onClick={click}>
      <div className="flex min-w-0 items-center gap-1.5">
        {icon}
        {label && <span className="truncate">{label}</span>}
      </div>
    </div>
  );
}
