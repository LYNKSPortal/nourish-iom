import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  target?: string;
}

export default function Button({ href, children, variant = 'primary', className = '', onClick, target }: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-lg font-semibold text-center transition-colors';
  
  // Determine background and text color based on className or variant
  let bgColor = '';
  let textColor = '#FFFFFF'; // Default white text
  let hoverBg = '';
  
  if (className.includes('bg-white')) {
    bgColor = '#FFFFFF';
    textColor = '#D95E25'; // Orange text on white
    hoverBg = '#F3F4F6';
  } else if (className.includes('bg-[#D95E25]')) {
    bgColor = '#D95E25';
    textColor = '#FFFFFF';
    hoverBg = '#c24e1a';
  } else if (variant === 'primary') {
    bgColor = '#D95E25';
    textColor = '#FFFFFF';
    hoverBg = '#c24e1a';
  } else if (variant === 'secondary') {
    bgColor = '#025336';
    textColor = '#FFFFFF';
    hoverBg = '#034028';
  }
  
  // Override text color if explicitly set in className
  if (className.includes('!text-[#D95E25]')) {
    textColor = '#D95E25';
  } else if (className.includes('!text-[#025336]')) {
    textColor = '#025336';
  } else if (className.includes('!text-white')) {
    textColor = '#FFFFFF';
  }

  const inlineStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const combinedClassName = `${baseStyles} ${className}`;

  if (href) {
    const isExternal = target === '_blank';
    return (
      <Link 
        href={href} 
        className={combinedClassName} 
        style={inlineStyle}
        target={target}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName} style={inlineStyle}>
      {children}
    </button>
  );
}
