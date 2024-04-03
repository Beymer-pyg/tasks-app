import { cn } from "@/lib/utils";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(`mx-auto w-full max-w-screen-xl px-2.5 md:px-3`)}>
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
