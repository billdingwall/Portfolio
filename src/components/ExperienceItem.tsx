import React from 'react';

export interface ExperienceItemProps {
  role: string;
  company: string;
  duration: string;
  productdesign?: number;
  designsystems?: number;
  researchandanalysis?: number;
  leadershipandmentorship?: number;
  productandstrategy?: number;
  frontenddevelopment?: number;
  contents: string; // The markdown contents parsed into HTML
}

export const ExperienceItem: React.FC<ExperienceItemProps> = (props) => {
  return (
    <div className="ExperienceItem Grid">
      <div className="ExperienceItem-content Grid-cell u-sizeFull u-sm-size1of3">
        <h3 className="ExperienceItem-role u-padTopNone u-padBottomSm">{props.role}</h3>
        <h5 className="ExperienceItem-details">
          <span className="ExperienceItem-detailsCompany">{props.company}</span>
          <span className="ExperienceItem-detailsDivider">|</span>
          <span className="ExperienceItem-detailsDuration">{props.duration}</span>
        </h5>

        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">product design</label>
          <div className="Progress-bar" style={{ width: `${props.productdesign || 0}%` }} data-label="product design"></div>
        </div>
        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">design systems</label>
          <div className="Progress-bar" style={{ width: `${props.designsystems || 0}%` }} data-label="design systems"></div>
        </div>
        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">research & analysis</label>
          <div className="Progress-bar" style={{ width: `${props.researchandanalysis || 0}%` }} data-label="research & analysis"></div>
        </div>
        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">leadership & mentorship</label>
          <div className="Progress-bar" style={{ width: `${props.leadershipandmentorship || 0}%` }} data-label="leadership & mentorship"></div>
        </div>
        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">product strategy</label>
          <div className="Progress-bar" style={{ width: `${props.productandstrategy || 0}%` }} data-label="product strategy"></div>
        </div>
        <div className="Progress u-hidden u-sm-block">
          <label className="Progress-label">front end development</label>
          <div className="Progress-bar" style={{ width: `${props.frontenddevelopment || 0}%` }} data-label="front end development"></div>
        </div>
      </div>
      <div
        className="ExperienceItem-description Grid-cell u-sizeFull u-sm-size2of3"
        dangerouslySetInnerHTML={{ __html: props.contents }}
      />
    </div>
  );
};
