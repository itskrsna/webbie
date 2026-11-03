import { PageTransition } from '../page-transition/PageTransition';

/**
 * HOC Component that adds page transition to a page using {@link PageTransition}.
 * @param Page The page component to add transition to.
 */
export default function withPageTransition<P extends object>(
  Page: React.ComponentType<P>
): React.FC<P> {
  return function PageWithTransition(props) {
    return (
      <PageTransition>
        <Page {...(props as P)} />
      </PageTransition>
    );
  };
}
