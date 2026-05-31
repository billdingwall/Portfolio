import React from 'react';

export interface GalleryItemProps {
  thumb: string;
}

export const GalleryItem: React.FC<GalleryItemProps> = (props) => {
  return (
    <div className="GalleryItem Grid-cell u-size1of3">
      <img className="GalleryItem-image" src={props.thumb} alt="Gallery item" />
    </div>
  );
};
