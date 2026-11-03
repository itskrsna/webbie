import { motion, type Variants } from 'framer-motion';

import content from '../../../../frontaid.content.json';
import Logo from '../../../components/logo/Logo';
import SocialIcons from '../../../components/social-icons/SocialIcons';
import Terminal from '../../../components/terminal/Terminal';

const lines = [
  {
    cmd: 'whoami',
    out: (
      <>
        <span className="text-primary glow font-bold">Krishna Kishore</span>
        {' — full stack developer · azure architect'}
      </>
    )
  },
  {
    cmd: 'cat stack.txt',
    out: '.net · python · node · react · flutter · azure'
  },
  {
    cmd: 'ls ~/sections',
    out: (
      <>
        <span className="text-secondary">works/</span>{' '}
        <span className="text-secondary">about/</span>{' '}
        <span className="text-secondary">nuggets/</span>{' '}
        <span className="text-secondary">posts/</span>
      </>
    )
  }
];

/**
 * The info section of the {@link Menu} component.
 */
interface InfoSectionProps {
  /**
   * Whether the menu is open.
   */
  isOpen: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({ isOpen }) => {
  const sectionVariants: Variants = {
    open: {
      y: 0,
      transition: {
        when: 'beforeChildren',
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.3
      }
    },
    closed: { y: '100%', transition: { duration: 0.5 } }
  };

  const variants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
    },
    closed: { opacity: 0, y: '100%' }
  };

  return (
    <motion.div
      className="lg:w-1/2 h-2/5 lg:h-full flex flex-col justify-center items-center bg-dark-shade px-4"
      variants={sectionVariants}
      initial={false}>
      <motion.div variants={variants} initial={false}>
        <Logo side={90} isOpen={isOpen} />
      </motion.div>
      <motion.div
        className="text-primary glow font-black text-3xl lg:text-4xl mt-2 mb-4"
        variants={variants}
        initial={false}>
        {content.Components.Menu.Info_Section.title}
      </motion.div>
      <motion.div
        className="w-full flex justify-center"
        variants={variants}
        initial={false}>
        <Terminal lines={lines} />
      </motion.div>
      <motion.div variants={variants} initial={false}>
        <SocialIcons className="text-2xl md:text-3xl m-1 lg:m-2 mt-4" />
      </motion.div>
    </motion.div>
  );
};

export default InfoSection;
