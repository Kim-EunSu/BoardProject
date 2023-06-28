"use client";

import React, { createContext, useContext, useState } from "react";

type AvatarContextType = {
  avatarImage: string | null;
  setAvatarImage: (image: string | null) => void;
};

const AvatarContext = createContext<AvatarContextType>({
  avatarImage: null,
  setAvatarImage: () => {},
});

export const useAvatar = () => {
  return useContext(AvatarContext);
};

type AvatarProviderProps = {
  children: React.ReactNode;
};

export const AvatarProvider: React.FC<AvatarProviderProps> = ({ children }) => {
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  return (
    <AvatarContext.Provider value={{ avatarImage, setAvatarImage }}>
      {children}
    </AvatarContext.Provider>
  );
};
