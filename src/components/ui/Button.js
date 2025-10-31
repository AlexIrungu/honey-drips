import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-4 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-honey text-white hover:bg-honey-600 hover:shadow-medium focus:ring-honey-200 active:scale-95",
    secondary: "bg-charcoal-800 text-white hover:bg-charcoal-700 hover:shadow-medium focus:ring-charcoal-300 active:scale-95",
    outline: "border-2 border-honey text-honey hover:bg-honey hover:text-white hover:shadow-soft focus:ring-honey-200 active:scale-95",
    ghost: "text-charcoal-600 hover:bg-warm-gray hover:text-charcoal-800 focus:ring-charcoal-200",
    success: "bg-green-600 text-white hover:bg-green-700 hover:shadow-medium focus:ring-green-200 active:scale-95",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };
  
  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon className="mr-2 h-5 w-5" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={styles}
    >
      {content}
    </button>
  );
}