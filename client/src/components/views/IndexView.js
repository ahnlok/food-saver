// /* eslint-disable */
// import   "../styles/css/normalize.css"
// import   "../styles/css/foodsaver.webflow.css"
// import   "../styles/css/webflow.css"
import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=603695ce0381f9e584a95535").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '603695cf0381f92a9fa9553a'
    htmlEl.dataset['wfSite'] = '603695ce0381f9e584a95535'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(C:\\css\\normalize.css);
          @import url(C:\\css\\webflow.css);
          @import url(C:\\css\\foodsaver.webflow.css);


          body{
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} id="Navigation" data-w-id="33c883c6-4afc-cc73-3bca-d2857a9d4bc2" role="banner" className="af-class-navbar w-nav">
              <div className="af-class-navigation-container">
                <h1 className="af-class-heading">FoodSaver</h1>
                <div className="af-class-navigation-right">
                  <div className="af-class-menu-button w-nav-button">
                    <div className="af-class-icon w-icon-nav-menu" />
                  </div>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <a href="/IndexView" aria-current="page" className="af-class-nav-link w-nav-link w--current">Home</a>
                    <a href="/register" target="_blank" className="af-class-nav-link w-button">Login in</a>
                    
                    <a href="/register" target="_blank" className="af-class-nav-link w-button">Login in</a>
                    
                   
                  </nav>
                </div>
              </div>
            </div>
            <div id="Header" className="af-class-colour">
              <div className="af-class-container-flex">
                <div className="af-class-hero-content">
                  <h1 style={{WebkitTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-hero-h1">TEST.</h1>
                  <p style={{WebkitTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(-25PX, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', opacity: 0}} className="af-class-hero-paragraph">Test</p>
                  <a href="./" className="af-class-button w-button">Create a Item</a>
                </div>
                <div className="af-class-hero-image-wrap" />
              </div>
            </div>
            <div className="af-class-content-section">
              <div className="af-class-container">
                <div className="af-class-title-wrap-centre">
                  <h2 className="af-class-heading-3">How it works.</h2>
                </div>
                <div className="w-layout-grid af-class-works-grid">
                  <div className="af-class-content-card"><img src="images/Step-01.png" alt className="af-class-step-image" />
                    <div className="af-class-content-wrapper">
                      <h5>Create your items</h5>
                      <p />
                    </div>
                  </div>
                  <div className="af-class-line-column">
                    <div className="af-class-line" />
                  </div>
                  <div className="af-class-content-card"><img src="images/Step-02.png" alt className="af-class-step-image" />
                    <div className="af-class-content-wrapper">
                      <h5>Add &nbsp;expiration dates</h5>
                      <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                    </div>
                  </div>
                  <div className="af-class-line-column">
                    <div className="af-class-line" />
                  </div>
                  <div className="af-class-content-card"><img src="images/Step-03.png" alt className="af-class-step-image" />
                    <div className="af-class-content-wrapper">
                      <h5>Save the items </h5>
                      <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer">
              <div className="af-class-container">
                <div className="w-layout-grid af-class-footer-grid">
                  <div id="w-node-_67f7db32-28d2-9f37-8b84-a159dcc6da5a-dcc6da57" className="af-class-footer-column"><img src="images/Logo.svg" width={40} alt className="af-class-footer-logo" /></div>
                  <div className="af-class-columns w-row">
                    <div className="w-col w-col-6">
                      <div className="af-class-div-block-2" />
                      <div className="af-class-footer-column">
                        <a href="index.html" aria-current="page" className="af-class-footer-link w--current">Home</a>
                        <a href="#" className="af-class-footer-link">Login in</a>
                      </div>
                    </div>
                    <div className="af-class-footer-column2 w-col w-col-6">
              
                      <a href="mailto:hello@website.com?subject=Hi" className="af-class-footer-link">Contact</a>
                    </div>
                  </div>
                </div>
                <div className="af-class-footer-legal">
                  <div className="af-class-footer-detail-left">
                    <div className="af-class-legal">Built by <a href="http://www.flowbase.co" target="_blank" className="af-class-webflow-link">Flowbase</a> &nbsp;· Powered by <a href="http://webflow.com/" target="_blank" className="af-class-webflow-link">Webflow</a>
                    </div>
                  </div>
                  <div className="af-class-footer-detail-right" />
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */