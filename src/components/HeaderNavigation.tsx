import React from 'react';
import { Logo } from './Logo';

export interface SocialMediaItem {
  link: string;
  contents: string; // SVG icon HTML
}

export interface HeaderNavigationProps {
  title?: string;
  socialMedia?: SocialMediaItem[];
}

export const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ title = '', socialMedia = [] }) => {
  return (
    <nav className="SiteNav">
      <div className={`Grid Grid--fit ${title}`}>
        <ul className="SiteNav-links Grid-cell u-textLeft">
          <li className="SiteNav-link">
            <h1 className="SiteNav-title u-flexAlignItemsCenter">
              <a href="/" className="Grid-cell">
                <span className="SiteNav-titleImage">
                  <Logo />
                </span>
                <span className="SiteNav-titleText">
                  Bill Dingwall | Product Design & Identity Design
                </span>
              </a>
            </h1>
          </li>
          <li className="SiteNav-link u-hidden u-sm-inlineBlock">
            <a href="/#Portfolio">Case Studies</a>
          </li>
          <li className="SiteNav-link u-hidden u-sm-inlineBlock">
            <a href="/#Experience">Experience</a>
          </li>
          <li className="SiteNav-link u-hidden u-sm-inlineBlock">
            <a href="/#Recomendations">Referals</a>
          </li>
          <li className="SiteNav-link u-sm-hidden">
            <a href="/#Portfolio">Work</a>
          </li>
          <li className="SiteNav-link">
            <a href="/about">About</a>
          </li>
        </ul>

        {socialMedia && socialMedia.length > 0 && (
          <ul className="SiteNav-links Grid-cell u-textRight u-hidden u-md-block">
            {socialMedia.map((item, index) => (
              <li key={index} className="SiteNav-link SiteNav-link--social">
                <a href={item.link} dangerouslySetInnerHTML={{ __html: item.contents }} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
