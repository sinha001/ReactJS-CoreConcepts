import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
export const ForwardLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...props }, ref) => (
    <Link ref={ref} {...props}>
      {children}
    </Link>
  )
);

ForwardLink.displayName = 'ForwardLink';
