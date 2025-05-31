'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, User, Mail, Utensils } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    name: '홈',
    href: '/',
    icon: Home,
  },
  {
    name: '소개',
    href: '/about',
    icon: User,
  },
  {
    name: '연락처',
    href: '/contact',
    icon: Mail,
  },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <Utensils className="w-8 h-8" />
            <span className="text-xl font-bold hidden sm:block">오늘 뭐 먹지? AI</span>
          </Link>
          
          <div className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105',
                    isActive
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:block">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
} 