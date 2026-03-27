import { THEME } from '@/components/shared/navbar/component/theme-switch/constant';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useCurrentTheme = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // useEffect to avoid hydration error
  useEffect(() => {
    setIsDarkTheme(resolvedTheme === THEME.DARK);
  }, [setIsDarkTheme, resolvedTheme]);

  return { isDarkTheme, theme: resolvedTheme, setTheme };
};
