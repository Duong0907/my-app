import { Icon } from '@/components/ui/icon';
import { Switch } from '@/components/ui/switch';
import { useTheme } from 'next-themes';

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const handleChangeTheme = (checked: Boolean) => {
    setTheme(checked ? 'dark' : 'light');
  };

  return (
    <Switch
      checked={isDark}
      onCheckedChange={handleChangeTheme}
      size="xl"
      iconOn={<Icon size="sm" variant="filled" name="dark_mode" />}
      iconOff={<Icon size="sm" name="light_mode" />}
      className="data-checked:bg-chart-4"
    />
  );
}
