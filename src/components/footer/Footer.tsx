import SocialIcons from '../social-icons/SocialIcons';
import TrackLink from '../track-link/TrackLink';

const Footer: React.FC<React.PropsWithChildren> = () => (
  <footer className="bg-dark-black border-t border-dark-tint flex justify-center">
    <div className="w-full max-w-screen-lg p-4 md:p-8">
      <div className="flex flex-wrap w-full justify-between mb-4">
        <section className="w-full sm:w-4/12 mb-8 sm:mb-0">
          <h1 className="text-primary glow text-xl mb-4">Krishna Kishore</h1>
          <p>
            {'// thanks for visiting. build something cool.'}
            <span role="img" aria-label="celebrate">
              🎉
            </span>{' '}
            exit 0{' '}
            <span role="img" aria-label="unicorn">
              🦄
            </span>{' '}
          </p>
        </section>
        <div className="flex w-full sm:w-8/12 sm:justify-end">
          <section>
            <h1 className="text-primary text-lg mb-2">$ ls links</h1>
            <ul>
              <li className="my-2">
                <TrackLink
                  href="/about"
                  label="Footer"
                  value="about"
                  className="ul-hover-effect">
                  About
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink
                  href="/works"
                  label="Footer"
                  value="works"
                  className="ul-hover-effect">
                  Works
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink
                  href="/posts"
                  label="Footer"
                  value="posts"
                  className="ul-hover-effect">
                  Posts
                </TrackLink>
              </li>
              <li className="my-2">
                <TrackLink
                  href="/nuggets"
                  label="Footer"
                  value="nuggets"
                  className="ul-hover-effect">
                  Nuggets
                </TrackLink>
              </li>
            </ul>
          </section>
          <section className="ml-16 md:ml-24">
            <h1 className="text-primary text-lg mb-2">$ ping me</h1>
            <div className="-ml-2">
              <SocialIcons className="text-2xl md:text-3xl mx-1" />
            </div>
            <h1 className="text-primary text-lg mt-4">$ mail</h1>
            <div>
              <a
                className="ul-hover-effect"
                href="mailto:me@krishnakishore.co.in">
                me@krishnakishore.co.in
              </a>
            </div>
          </section>
        </div>
      </div>

      <div className="text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} | Compiled with
          <span className="align-middle text-lg" role="img" aria-label="coding">
            &nbsp;❤️&nbsp;
          </span>
          by <span className="text-primary">Krishna Kishore</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
