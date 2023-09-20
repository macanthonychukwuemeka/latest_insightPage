import Subscribe from "./subscribe"

const Navbar = () => {
  return (
    <div>
      <header className='gh-head outer'>
        <div className='gh-head-inner inner'>
          <div className='gh-head-brand'>
            <a className='gh-head-logo' href='https://insights.unlocks.app'>
              <img
                src='https://insights.unlocks.app/content/images/2023/05/Group-35251--1-.png'
                alt='Unlocks Insights '
              />
            </a>
            <button
              className='gh-search gh-icon-btn'
              aria-label='Search this site'
              data-ghost-search>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                width='20'
                height='20'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </button>
            <button className='gh-burger'></button>
          </div>
          <nav className='gh-head-menu'>
            <ul className='nav'>
              <li className='nav-tokenunlocks'>
                <a href='https://token.unlocks.app/'>TokenUnlocks</a>
              </li>
            </ul>
          </nav>
          <div className='gh-head-actions'>
            <button className='gh-search gh-icon-btn' data-ghost-search>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                width='20'
                height='20'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </button>
            <div className='gh-head-members button'>
              <a
                className='gh-head-link gh-portal-close'
                href='#/portal/signin'
                data-portal='signin'>
                Sign in
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className='site-content'>
        <div className='site-header-content outer'>
          <div className='inner container'>
            <div className='custom-text'>
              <div className='custom-text-header custom-header'>
                Unlock Your Edge <br /> with
                <span className='accent'>Unlocks</span> Insights
              </div>
              <ul className='custom-list'>
                <li>
                  In-depth insights from tokenomics
                  <span className='accent bold'>experts.</span>
                </li>
                <li>
                  Access to
                  <span className='accent bold'>exclusive</span> digestible
                  content.
                </li>
                <li>
                  Stay on top of the game with
                  <span className='accent bold'>actionable unlocks</span>
                  analysis.
                </li>
              </ul>
              <div className='cta-container'>
                <a href='#/portal' data-portal className='gh-portal-close'>
                  <span>Subscribe Now</span>
                </a>
              </div>
            </div>
            <img
              className='container-image'
              src='https://space.unlocks.app/ghost/u1Ly13.png'
            />
            <img
              className='bg-decorator-2'
              src='https://space.unlocks.app/ghost/sM631l.png'
            />
          </div>
          <main id='site-main' className='site-main outer '>
            <div className='inner posts'>
              <div className='custom-header'>
                Latest
                <span className='accent'> Insights</span>
              </div>
              <div className='post-hero-container'>
                <div
                  className='hero-post-card'
                  // onClick="javascript:window.open('/tokenunlocks-v1-launch/', '_blank')"
                >
                  <div
                    className='hero-post-image'
                    style={{
                      backgroundImage:
                        "url(https://insights.unlocks.app/content/images/size/w600/2023/07/Group-35437.png)",
                    }}>
                    <div className='hero-badge-container'> </div>
                  </div>
                  <div className='hero-card-content'>
                    <div>
                      <div className='flex'>
                        <div className='badge '>
                          <a href='/tag/product/'>Product</a>
                        </div>
                      </div>
                      <div className='hero-card-title'>
                        TokenUnlocks V.1: A New Chapter in Tokenomics Dashboard.
                      </div>
                      <div className='hero-card-excerpt'>
                        TokenUnlocks V.1's New UI and New features to elevate
                        your tokenomics analysis experience by making it easy to
                        use, accurate, and insightful.
                      </div>
                      <div className='hero-card-footer'>
                        <div>
                          <time
                            className='post-card-meta-date'
                            dateTime='2023-07-03'>
                            Jul 3, 2023
                          </time>
                          <span className='accent'>&nbsp;• 3 min read</span>
                        </div>
                        <a href='/author/blacksauce/'>
                          <img
                            className='author-badge'
                            src='https://insights.unlocks.app/content/images/2023/05/TokenUnlocks_wh…olding_black_sauce_in_pixar_style_ee1ad6ae-f732-44f3-ba5f-1b788765052a.png'
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer className='site-footer outer snipcss-E3ce8'>
        <div className='inner footer-container'>
          <section className='site-info'>
            <div>
              <a href='/'>
                <img
                  src='https://space.unlocks.app/ghost/3d2S1.png'
                  id='style-ytsDz'
                  className='style-ytsDz'
                />
              </a>
            </div>
            <div className='footer-description'>
              Unlocks Insights is the dedicated blog platform by TokenUnlocks,
              offering an exclusive hub for nuanced insights and on-chain data
              analysis. It is expertly designed to provide detailed tokenomics
              insights, actionable analysis, and digestible content that
              empowers readers to stay ahead of the curve.
            </div>
            <div className='copyright'>
              © 2023 DaoSurv Pte. Ltd. All Rights Reserved.
            </div>
          </section>
          <nav className='site-footer-nav'>
            <div className='item'>
              <div className='header'>Product</div>
              <a target='_blank' href='https://token.unlocks.app'>
                TokenUnlocks
              </a>
              <br />
              <a target='_blank' href='https://insights.unlocks.app/'>
                Unlock Insights
              </a>
              <br />
              <a target='_blank' href='https://daosurv.com/'>
                DAOSURV.com
              </a>
              <br />
              <a
                target='_blank'
                href='https://docs.unlocks.app/docs/token-unlocks/introduction'>
                Documentation
              </a>
              <br />
              <a
                target='_blank'
                href='https://feedback.unlocks.app/b/token-requests/'>
                Token request
              </a>
              <br />
              <a
                target='_blank'
                href='https://feedback.unlocks.app/b/feature-requests/'>
                Feature request
              </a>
              <br />
            </div>
            <div className='item'>
              <div className='header'>Company</div>
              <a target='_blank' href='mailto:info@daosurv.com'>
                Contact us
              </a>
              <br />
              <a target='_blank' href='https://token.unlocks.app/terms'>
                Terms of Service
              </a>
              <br />
              <a target='_blank' href='https://token.unlocks.app/privacy'>
                Privacy Policy
              </a>
              <br />
            </div>
            <div className='item'>
              <div className='header'>Social</div>
              <a target='_blank' href='https://twitter.com/Token_Unlocks'>
                Twitter
              </a>
              <br />
              <a target='_blank' href='https://t.me/daosurv'>
                Telegram
              </a>
              <br />
              <a target='_blank' href='https://t.me/TokenUnlocks_Announce'>
                Telegram news
              </a>
              <br />
            </div>
          </nav>
          <div className='copyright-mobile'>
            © 2023 DaoSurv Pte. Ltd. All Rights Reserved.
          </div>
        </div>
      </footer>
      <Subscribe />
    </div>
  )
}
export default Navbar
