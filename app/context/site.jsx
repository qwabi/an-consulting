'use client';

import { createContext, useContext, useState } from 'react';

const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <PackageContext.Provider
      value={{
        selectedPackage,
        setSelectedPackage,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export const usePackage = () => useContext(PackageContext);
