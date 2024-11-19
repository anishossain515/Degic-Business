import React from 'react'
import { cn } from '../utilities/Cn'

function CmButton({ children, className }) {
  return (
    <button 
      className={cn(
        'bg-[#5F62E2] text-white px-4 py-[10px] rounded-[10px] transition-colors duration-200 hover:bg-[#4a4ed0]', 
        className
      )}
    >
      {children}
    </button>
  );
}

export default CmButton;
