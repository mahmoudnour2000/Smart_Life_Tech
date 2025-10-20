export interface NavItem {
  label: string;
  route: string;
}


export interface FooterLink {
  label: string;
  route: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialMedia {
  name: string;
  icon: string;
  url: string;
  ariaLabel: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address';
  value: string;
  icon: string;
}