export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface ContactItem {
  label: string;
  icon: React.ComponentType<any>;
  value: string;
  href: string;
}
