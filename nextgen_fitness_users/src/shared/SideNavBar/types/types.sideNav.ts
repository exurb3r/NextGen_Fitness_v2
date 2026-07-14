import { ComponentType } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";

export interface NavItem {
  path: string;
  label: string;
  icon: ComponentType<SvgIconProps>;
}

export interface NavSection {
  label: string;
  links: NavItem[];
}