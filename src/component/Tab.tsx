// Tab.tsx
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Tab as TabType } from '../types';

interface TabProps {
  tab: TabType;
}

const Tab: React.FC<TabProps> = ({ tab }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    // @ts-ignore
  } = useSortable({ id: tab.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="bg-gray-200 p-2 mb-2 rounded shadow flex items-center justify-between"
    >
      <span className="truncate text-sm">{tab.title}</span>
      <div {...listeners} className="mr-2 cursor-move flex-shrink-0">
        <DragIcon />
      </div>
    </div>
  );
};

const DragIcon: React.FC = () => (
  <div className="flex flex-col space-y-1">
    <div className="flex space-x-1">
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
    </div>
    <div className="flex space-x-1">
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
    </div>
    <div className="flex space-x-1">
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
    </div>
  </div>
);

export default Tab;