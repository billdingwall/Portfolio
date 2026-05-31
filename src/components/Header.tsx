import React from 'react';
import { HeaderNavigation, HeaderNavigationProps } from './HeaderNavigation';

export interface HeaderProps extends HeaderNavigationProps {
  // If header has its own extra props or classes, we can put them here.
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <HeaderNavigation title={props.title} socialMedia={props.socialMedia} />
    </header>
  );
};
