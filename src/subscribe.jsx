import tailwindConfig from "../tailwind.config"

const Subscribe = () => {
  return (
    <html>
      <body>
        <div className='gh-portal-triggerbtn-wrapper'>
          <div
            className='gh-portal-triggerbtn-container with-label'
            data-testid='portal-trigger-button'>
            <svg
              id='Regular'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              style={{
                width: "26px",
                height: "26px",
                color: "rgb(255, 255, 255)",
              }}>
              <defs>
                <style>
                  {`.cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:0.8px;}`}
                </style>
              </defs>
              <circle className='cls-1' cx='12' cy='9.75' r='5.25'></circle>
              <path
                className='cls-1'
                d='M18.913,20.876a9.746,9.746,0,0,0-13.826,0'></path>
              <circle className='cls-1' cx='12' cy='12' r='11.25'></circle>
            </svg>
            <span className='gh-portal-triggerbtn-label'> Subscribe </span>
          </div>
        </div>
      </body>
    </html>
  )
}
export default Subscribe
