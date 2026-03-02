interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ children, subtitle, centered = false, className = "" }: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed font-body">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-16 h-0.5 bg-gold ${centered ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
