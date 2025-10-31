export default function Card({ children, className = '', hover = false }) {
  const baseStyles = "bg-white rounded-2xl shadow-soft overflow-hidden";
  const hoverStyles = hover ? "transition-all duration-300 hover:shadow-medium hover:-translate-y-1" : "";
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

export function CardImage({ src, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-2xl font-display font-bold text-charcoal-800 mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-charcoal-600 leading-relaxed ${className}`}>
      {children}
    </p>
  );
}