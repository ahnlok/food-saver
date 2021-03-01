/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=603695ce0381f9e584a95535").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class LoginInView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/LoginInController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = LoginInView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6039248e0961aca61e69bf94'
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
    const proxies = LoginInView.Controller !== LoginInView ? transformProxies(this.props.children) : {

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
          <div className="af-class-body-3">
            <div data-collapse="medium" data-animation="default" data-duration={400} id="Navigation" data-w-id="33c883c6-4afc-cc73-3bca-d2857a9d4bc2" role="banner" className="af-class-navbar w-nav">
              <div className="af-class-navigation-container">
                <h1 className="af-class-heading">FoodSaver</h1>
                <div className="af-class-navigation-right">
                  <div className="af-class-menu-button w-nav-button">
                    <div className="af-class-icon w-icon-nav-menu" />
                  </div>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <a href="index.html" className="af-class-nav-link w-nav-link">Home</a>
                    <a href="login-in.html" target="_blank" aria-current="page" className="af-class-nav-link w-button w--current">Login in</a>
                    <a href="#" className="af-class-nav-link w-button">Save</a>
                    <a href="add-item.html" className="af-class-nav-link w-nav-link">Add Item</a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-form">
              <form id="wf-form-Login-Form" name="wf-form-Login-Form" data-name="Login Form" redirect="website.com/add-item" data-redirect="website.com/add-item"><label htmlFor="First-Name" className="af-class-field-label-8"> First Name</label><input type="text" className="w-input" maxLength={256} name="First-Name" data-name="First Name" placeholder="Enter First Name " id="First-Name" /><label htmlFor="email" className="af-class-field-label-9">Email Address</label><input type="email" className="w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter email address" id="email" required /><label htmlFor="email-2" className="af-class-field-label-10">Password</label><input type="password" className="w-input" maxLength={256} name="field" data-name="Field" placeholder=" Enter password" id="field" required /><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-button" />
                <div className="w-layout-grid af-class-grid-6" />
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
              </form>
              <div className="w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default LoginInView

/* eslint-enable */