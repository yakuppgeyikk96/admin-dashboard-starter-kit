import * as LucideIcons from "lucide-react";
import { LucideProps } from "lucide-react";

export const renderLucideIcon = (iconName: string, className: string) => {
  const IconComponent = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as React.ComponentType<LucideProps>;

  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }

  return <IconComponent className={className} />;
};
