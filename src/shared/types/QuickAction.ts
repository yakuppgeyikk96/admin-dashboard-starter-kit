export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  actionUrl: string;
  badge?: string;
  badgeColor?: string;
}

export interface QuickActionCategory {
  id: string;
  title: string;
  actions: QuickAction[];
}
