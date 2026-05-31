import React from 'react';

export interface ReferralItemProps {
  contents: string; // HTML content
  title: string;
  intro: string;
}

export const ReferralItem: React.FC<ReferralItemProps> = (props) => {
  return (
    <li className="ReferralItem splide__slide">
      <div
        className="ReferralItem-content"
        dangerouslySetInnerHTML={{ __html: props.contents }}
      />
      <div className="ReferralItem-person">
        - {props.title}, {props.intro}
      </div>
    </li>
  );
};
