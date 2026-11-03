import React from 'react';

import IconGithub from '../../icons/Github';
import IconLinkedin from '../../icons/Linkedin';
import IconStackoverflow from '../../icons/Stackoverflow';
import IconTwitter from '../../icons/Twitter';
import { trackEvent } from '../../lib/ga';

/**
 * Displays a list of social icons. Reports to analytics when clicked.
 */
const SocialIcons: React.FC<{ className: string }> = ({ className }) => {
  const onClick = (value) => {
    trackEvent({
      action: 'click',
      category: 'Social Media',
      label: value
    });
  };
  return (
    <div className="flex items-center">
      <a
        aria-label="View my profile on Stack overflow"
        target="_blank"
        rel="noreferrer"
        href="https://stackoverflow.com/users/3690846/itskrsna"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Stackoverflow')}>
        <IconStackoverflow />
      </a>
      <a
        aria-label="View my profile on Github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/itskrsna"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Github')}>
        <IconGithub />
      </a>
      <a
        aria-label="View my profile on Twitter"
        target="_blank"
        rel="noreferrer"
        href="https://x.com/itskrsnakishore"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Twitter')}>
        <IconTwitter />
      </a>
      <a
        aria-label="View my profile on Linkedin"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/itskrsna/"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Linkedin')}>
        <IconLinkedin />
      </a>

      {/* <a
        aria-label="View my profile on Instagram"
        target="_blank"
        rel="noreferrer"
        href="https://instagram.com/webruster"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Instagram')}>
        <IconInstagram />
      </a>
       <a
        aria-label="View my profile on Behance"
        target="_blank"
        rel="noreferrer"
        href="https://www.behance.net/webruster"
        className={`${className} text-secondary hover:text-secondary-tint`}
        onClick={() => onClick('Behance')}>
        <IconBehance />
      </a> */}
    </div>
  );
};

export default SocialIcons;
