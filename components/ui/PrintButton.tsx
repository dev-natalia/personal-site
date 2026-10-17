"use client";

interface PrintButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function PrintButton({ children, className = "" }: PrintButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-sans font-medium text-sm bg-accent text-bg hover:bg-accent/90 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${className}`}
    >
      {children}
    </button>
  );
}
