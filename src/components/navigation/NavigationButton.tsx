"use client"
import { Github, Home, Linkedin, NotebookTextIcon, Palette, Phone, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface NavigationButtonProps {
  x:number;
  y:number;
  label: string;
  link: string;
  icon: string;
  newTab: boolean;
}

const getIcon = (icon:string) => {
    switch (icon) {
        case 'home' :
            return <Home className='w-full h-auto' strokeWidth={1.5}/>
            case 'about' :
                return <User className='w-full h-auto' strokeWidth={1.5}/>
                case 'projects' :
                    return <Palette className='w-full h-auto' strokeWidth={1.5}/>
                    case 'contact' :
                        return <Phone className='w-full h-auto' strokeWidth={1.5}/>
                        case 'github' :
                            return <Github className='w-full h-auto' strokeWidth={1.5}/>
                            case 'linkedin' :
                                return <Linkedin className='w-full h-auto' strokeWidth={1.5}/>
                                case 'resume' :
                                    return <NotebookTextIcon className='w-full h-auto' strokeWidth={1.5}/>
        default : 
        return <Home className='w-full h-auto' strokeWidth={1.5}/>   
    }
}

/**
 * Component for rendering navigation button
 */

const NavigationButton: React.FC<NavigationButtonProps> = ({x, y, label, link, icon, newTab}) => {
    return (
      <div 
        className='absolute cursor-pointer z-50 transform -translate-x-1/2 -translate-y-1/2' 
        style={{
         transform: `translate(${x}px, ${y}px)`,
        }}
      >
        <Link 
          href={link} 
          target={newTab ? '_blank' : '_self'} 
          className='text-foreground group rounded-full flex items-center justify-center 
                   bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
                   shadow-glass-inset
                   hover:shadow-glass-sm' 
          aria-label={label}
        >
          <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>{getIcon(icon)}
            <span className='peer bg-transparent absolute top-0 left-0 w-full h-full'/>
          <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2
                   text-accent text-sm rounded-md whitespace-nowrap bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] 
                   shadow-glass-inset'>{label}</span>

          </span>
        </Link>
      </div>
    );
  };
  
  export default NavigationButton;