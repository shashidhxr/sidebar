import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import Tab from './Tab';
import { Tab as TabType, initialTabs } from '../types';

const Sidebar: React.FC = () => {
  const [tabs, setTabs] = useState<TabType[]>(initialTabs);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setTabs((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
    //   @ts-ignore
    items={tabs.map((tab) => tab.id)}
    strategy={verticalListSortingStrategy}
    >
        <div className="w-64 bg-gray-100 p-4 h-screen">
            {/* @ts-ignore */}
          {tabs.map((tab) => (
            <Tab key={tab.id} tab={tab} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default Sidebar;