import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'header' | 'footer' | 'main' | 'article';
}

/**
 * Site-wide content wrapper — max 1140px wide, centered, with 28px gutter.
 * Replaces the original `.wrap` CSS class.
 */
export default function Container({
  children,
  className,
  as: Tag = 'div',
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1140px] px-7', className)}>
      {children}
    </Tag>
  );
}