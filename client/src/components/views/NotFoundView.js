/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=603695ce0381f9e584a95535").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '603695cf0381f984cba95544'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility-page-wrap-2">
              <div className="af-class-container af-class-flex-vertical"><img src="images/Step-02.png" alt className="af-class-utility-image" />
                <h2>Page Not Found</h2>
                <div>
                  <p className="af-class-utility-paragraph">Sorry, the page you're looking for cannot be found <br />Visit our <a href="#" className="af-class-link">homepage</a>, to get back on track.</p>
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
                        <a href="index.html" className="af-class-footer-link">Home</a>
                        <a href="#" className="af-class-footer-link">Login in</a>
                      </div>
                    </div>
                    <div className="af-class-footer-column2 w-col w-col-6">
                      <a href="#" className="af-class-footer-link">Saved</a>
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

export default NotFoundView

/* eslint-enable */