import { Icon } from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';
import { THEME } from './constant';
import { useState, useEffect } from 'react';

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // useEffect to avoid hydration error
  useEffect(() => {
    setIsDarkTheme(resolvedTheme === THEME.DARK);
  }, [setIsDarkTheme, resolvedTheme]);

  const handleChangeTheme = (checked: Boolean) => {
    setTheme(checked ? THEME.DARK : THEME.LIGHT);
  };

  return (
    <Switch
      checked={isDarkTheme}
      onCheckedChange={handleChangeTheme}
      size="xl"
      iconOn={<Icon size="sm" variant="filled" name="dark_mode" />}
      iconOff={<Icon size="sm" name="light_mode" />}
      className="data-checked:bg-chart-4"
    />
  );
}
