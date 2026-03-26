import { Project } from '@/interfaces/project';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { isEmpty, map } from 'lodash';
import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 gap-8">
      {map(projects, (project) => {
        const { id, name, features, technologies, imageUrl } = project;

        return (
          <Card key={id} className="cursor-pointer">
            {isEmpty(imageUrl) ? (
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
                  alt={name}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={1 / 1}>
                <Image src={imageUrl} alt={name} fill />
              </AspectRatio>
            )}
            <CardHeader>
              <CardTitle>
                <Typography variant="h4" weight="bold">
                  {name}
                </Typography>
              </CardTitle>
              <CardDescription>
                <Typography variant="body" weight="light">
                  {technologies}
                </Typography>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Typography variant="h6" weight="light">
                {features}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </ul>
  );
}
