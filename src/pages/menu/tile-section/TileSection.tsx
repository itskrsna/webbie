import { motion } from 'framer-motion';

import MenuTile from '../../../components/menu/menu-tile/MenuTile';

/**
 * Props for {@link TileSection}
 */
interface TileSectionProps {
  /**
   * Function that closes the menu.
   */
  closeMenu: () => unknown;

  /**
   * Whether the menu is open.
   */
  isOpen: boolean;
}

/**
 * The tile section of the {@link Menu} component.
 */
const TileSection: React.FC<TileSectionProps> = ({ closeMenu, isOpen }) => {
  return (
    <motion.div className="lg:w-1/2 h-3/5 lg:h-full flex flex-wrap">
      <MenuTile
        direction="bottom"
        title="Works"
        subTitle={"Things I've done."}
        url="/works"
        theme="primary"
        onClick={closeMenu}
        isOpen={isOpen}
      />
      <MenuTile
        direction="left"
        title="About"
        subTitle={'Get to know me.'}
        url="/about"
        theme="secondary"
        onClick={closeMenu}
        isOpen={isOpen}
      />
      <MenuTile
        direction="right"
        title="Nuggets"
        subTitle={'Bite sized posts that teach you something.'}
        url="/nuggets"
        theme="secondary"
        onClick={closeMenu}
        isOpen={isOpen}
      />
      <MenuTile
        direction="top"
        title="Posts"
        subTitle={'My ramblings about things that excite me.'}
        url="/posts"
        theme="primary"
        onClick={closeMenu}
        isOpen={isOpen}
      />
    </motion.div>
  );
};

export default TileSection;
