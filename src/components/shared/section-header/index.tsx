import { Typography } from '@/components/ui/typography';

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <Typography variant="h1" weight="regular" className="text-center mb-16">
      {children}
    </Typography>
  );
}
