import { motion } from 'framer-motion';
import { useState } from 'react';

import cn from '@/lib/clsxm';

export function AnimatedTabs({
  tabData,
}: {
  tabData: {
    id: string;
    label: string;
  }[];
}) {
  const [activeTab, setActiveTab] = useState(tabData[0].id);
  return (
    <div
      className='flex h-12 w-full items-center 
        justify-between space-x-1 rounded-xl bg-neutral-700 px-2
        
        '
    >
      {tabData.map((tab, index) => (
        <div
          className={cn(
            'w-full text-center ',
            index === 1 &&
              'border-l-[1px] border-r-[1px] border-neutral-500 transition-all duration-300',
            activeTab === 'daily' && 'border-r-transparent',
            activeTab === 'monthly' && 'border-l-transparent',
            activeTab === 'weekly' && 'border-0',
          )}
        >
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? '' : 'hover:text-white/60'}
                         relative w-full rounded-full px-3 py-1.5 text-sm font-medium
                          text-white outline-sky-400 transition
                          focus-visible:outline-2
                          `}
            style={{
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId='bubble'
                className='absolute inset-0 z-10 bg-primary mix-blend-lighten'
                style={{ borderRadius: 9 }}
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        </div>
      ))}
    </div>
  );
}
