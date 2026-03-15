import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Typography } from '@/components/ui/typography';
import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_ICON_SIZE = 28;

const SocialIcon = ({
  path,
  darkPath,
  altText,
  href,
}: {
  path: string;
  darkPath: string;
  altText: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <Image
        className="dark:hidden cursor-pointer"
        src={path}
        width={SOCIAL_ICON_SIZE}
        height={SOCIAL_ICON_SIZE}
        alt={altText}
      />
      <Image
        className="hidden dark:block cursor-pointer"
        src={darkPath}
        width={SOCIAL_ICON_SIZE}
        height={SOCIAL_ICON_SIZE}
        alt={altText}
      />
    </Link>
  );
};

export default function HomePage() {
  return (
    <>
      <div className="home-page flex flex-col items-center gap-7">
        <div className="flex flex-col gap-3 items-center">
          <Avatar className="size-[150px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Duong Phan</AvatarFallback>
          </Avatar>
          <Typography variant="h1" weight="bold">
            Duong Phan
          </Typography>
        </div>
        <Typography variant="h4" weight="light">
          Software Engineer
        </Typography>
        <Typography className="text-center max-w-[500px]" variant="h4" weight="light">
          Passionate about building seamless digital products through end-to-end
        </Typography>
        <div className="social-group flex gap-2">
          <SocialIcon
            path="/icons/facebook.svg"
            darkPath="/icons/facebook-dark.svg"
            altText="facebook-icon"
            href="https://www.facebook.com/ptduong.it"
          />
          <SocialIcon
            path="/icons/mail.svg"
            darkPath="/icons/mail-dark.svg"
            altText="mail-icon"
            href="mailto:duongphan090703@gmail.com"
          />
          <SocialIcon
            path="/icons/linkedin.svg"
            darkPath="/icons/linkedin-dark.svg"
            altText="linkedin-icon"
            href="https://www.linkedin.com/in/thanh-duong-phan-9855a8245/"
          />
          <SocialIcon
            path="/icons/github.svg"
            darkPath="/icons/github-dark.svg"
            altText="github-icon"
            href="https://github.com/Duong0907"
          />
        </div>
      </div>
    </>
  );
}
