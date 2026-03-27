import { Spinner } from '@/components/ui/spinner';

export default function Loading() {
  return (
    <div className="w-full flex justify-center">
      <Spinner className="size-10" />
    </div>
  );
}
