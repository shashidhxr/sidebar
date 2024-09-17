export interface Tab {
    id: string;
    title: string;
    content: string;
  }
  
  export const initialTabs: Tab[] = [
    { id: "tab1", title: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2", title: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3", title: "Tab 3", content: "Content for Tab 3" },
    { id: "tab4", title: "Tab 4", content: "Content for Tab 4" },
    { id: "tab5", title: "Tab 5", content: "Content for Tab 5" },
  ];