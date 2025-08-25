interface SchematicCanvasProps {
  title: string;
  description?: string;
  className?: string;
}

export function SchematicCanvas({ title, description, className = "" }: SchematicCanvasProps) {
  return (
    <div className={`relative bg-background border border-border rounded-lg p-8 min-h-[300px] flex flex-col items-center justify-center ${className}`}>
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--noreja-tertiary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--noreja-tertiary)) 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
      
      {/* Placeholder content */}
      <div className="relative z-10 text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-noreja-main to-noreja-tertiary rounded-lg mx-auto mb-4 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white rounded opacity-80" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground max-w-xs">{description}</p>
        )}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-noreja-tertiary rounded-full opacity-30" />
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-noreja-main rounded-full opacity-40" />
      <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-noreja-tertiary rounded-full opacity-25" />
    </div>
  );
}