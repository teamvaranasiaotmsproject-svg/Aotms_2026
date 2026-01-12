import React from 'react';
import { StudentPlacement } from '@/data/placements';

interface StudentPlacementCardProps {
  placement: StudentPlacement;
}

export const StudentPlacementCard = ({ placement }: StudentPlacementCardProps) => {
  return (
    <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center p-6 text-center">
      <img
        src={placement.image}
        alt={placement.name}
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary/20"
      />
      <h3 className="text-lg font-bold text-foreground mb-1">{placement.name}</h3>
      <p className="text-sm text-primary font-semibold mb-2">{placement.jobTitle}</p>
      <div className="flex flex-wrap justify-center gap-2">
        {placement.companies.map((company, index) => (
          <span key={index} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
            {company}
          </span>
        ))}
      </div>
    </div>
  );
};
