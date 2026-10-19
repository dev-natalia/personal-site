interface LangSwitchProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

// <a> comum (não <Link>): cada idioma tem seu próprio layout raiz, então a troca recarrega a página
export default function LangSwitch({ href, label, children }: LangSwitchProps) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="text-text-muted hover:text-accent border border-border hover:border-accent text-xs font-mono px-3 py-1.5 rounded transition-colors duration-200"
    >
      {children}
    </a>
  );
}
