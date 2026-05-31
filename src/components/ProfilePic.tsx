import React from 'react';

export interface ProfilePicProps {
  thumb: string;
}

export const ProfilePic: React.FC<ProfilePicProps> = ({ thumb }) => {
  return (
    <li className="ProfilePic splide__slide">
      <div className="ProfilePic-content">
        <img className="ProfilePic-image" src={thumb} alt="Profile picture" />
      </div>
    </li>
  );
};
