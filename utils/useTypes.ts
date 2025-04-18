import React, { Dispatch } from "react";

export interface ExtensionProps {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface ExtensionCompProps extends ExtensionProps {
  setExtensions: Dispatch<React.SetStateAction<ExtensionProps[]>>;
}
