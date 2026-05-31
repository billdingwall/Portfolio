import React from 'react';

export interface PortfolioItemProps {
  path: string;
  intro: string;
  thumb: string;
  type_productStrategy?: boolean;
  type_productDesign?: boolean;
  type_designSystem?: boolean;
  type_research?: boolean;
  type_leadership?: boolean;
  type_dev?: boolean;
}

export const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  return (
    <a className="PortfolioItem Grid Grid--fit" href={`/${props.path}`}>
      <div className="PortfolioItem-contentContainer Grid-cell u-sizeFull u-sm-size2of4 u-md-size1of3">
        <p className="PortfolioItem-title">{props.intro}</p>
        <ul className="List--dotSeperated u-colorWhite u-borderTop u-hidden u-sm-block">
          {props.type_productStrategy && <li>product strategy</li>}
          {props.type_productDesign && <li>product design</li>}
          {props.type_designSystem && <li>design systems</li>}
          {props.type_research && <li>research & analysis</li>}
          {props.type_leadership && <li>leadership</li>}
          {props.type_dev && <li>development</li>}
        </ul>
      </div>
      <div className="PortfolioItem-imageContainer Grid-cell u-sizeFull u-sm-size2of4 u-md-size2of3">
        <img className="PortfolioItem-image" src={props.thumb} alt={props.intro} />
      </div>
    </a>
  );
};
