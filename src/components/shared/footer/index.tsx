import { Typography } from '@/components/ui/typography';

export function Footer() {
  return (
    <div className="flex flex-col items-center">
      <div className="divider border-t border-top-foreground w-full max-w-[555px] mb-12"></div>
      <Typography variant="body" weight="regular">
        Phan Thanh Duong @ 2026
      </Typography>
    </div>
  );
}
