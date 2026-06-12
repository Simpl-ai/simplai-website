// Central registry for semantic icon names → library + icon name
// Usage: <Icon library={icons.alert.library} name={icons.alert.name} />

export interface IconRef {
  library:
    | "lucide"
    | "heroicons"
    | "heroicons-solid"
    | "heroicons-mini"
    | "phosphor";
  name: string;
}

export const icons = {
  // Navigation
  menu: { library: "lucide", name: "menu" } as IconRef,
  close: { library: "lucide", name: "x" } as IconRef,
  arrowRight: { library: "lucide", name: "arrow-right" } as IconRef,
  arrowLeft: { library: "lucide", name: "arrow-left" } as IconRef,
  chevronDown: { library: "lucide", name: "chevron-down" } as IconRef,
  externalLink: { library: "lucide", name: "external-link" } as IconRef,

  // Feature / goals (current site)
  alert: { library: "lucide", name: "triangle-alert" } as IconRef,
  cloudUpload: { library: "lucide", name: "cloud-upload" } as IconRef,
  clipboard: { library: "lucide", name: "clipboard-list" } as IconRef,
  radio: { library: "lucide", name: "radio" } as IconRef,
  shieldCheck: { library: "lucide", name: "shield-check" } as IconRef,
  messageCircle: { library: "lucide", name: "message-circle" } as IconRef,

  // Common actions
  check: { library: "heroicons-solid", name: "check" } as IconRef,
  checkCircle: { library: "heroicons-solid", name: "check-circle" } as IconRef,
  plus: { library: "heroicons", name: "plus" } as IconRef,
  trash: { library: "heroicons", name: "trash" } as IconRef,
  edit: { library: "heroicons", name: "pencil-square" } as IconRef,

  // Brand / social
  github: { library: "phosphor", name: "github-logo" } as IconRef,
  twitter: { library: "phosphor", name: "twitter-logo" } as IconRef,
  linkedin: { library: "phosphor", name: "linkedin-logo" } as IconRef,
} as const;

export type IconName = keyof typeof icons;
