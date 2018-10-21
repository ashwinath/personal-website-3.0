export interface LinkerProps {
  link: string;
  openInNewTab: boolean;
  children: React.ReactNode;
}

export interface LinkBoxProps {
  iconClass: string;
  title: string;
  subtitle: string;
  callToActionText: string;
  link: string;
  openInNewTab: boolean;
}

export interface ProjectProps {
  flipped: boolean;
  imageUrl: string;
  title: string;
  subtitle: string;
  text: string[];
}
