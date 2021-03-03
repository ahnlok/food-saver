/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=603695ce0381f9e584a95535").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class SignupView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/SignupController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = SignupView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6037c7c8f2d4914ae60ae88e'
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
    const proxies = SignupView.Controller !== SignupView ? transformProxies(this.props.children) : {

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
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} id="Navigation" data-w-id="33c883c6-4afc-cc73-3bca-d2857a9d4bc2" role="banner" className="af-class-navbar w-nav">
              <div className="af-class-navigation-container">
                <h1 className="af-class-heading">FoodSaver</h1>
                <div className="af-class-navigation-right">
                  <div className="af-class-menu-button w-nav-button">
                    <div className="af-class-icon w-icon-nav-menu" />
                  </div>
                  <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                    <a href="/IndexView" className="af-class-nav-link w-nav-link">Home</a>
                    <a href="/Login" target="_blank" className="af-class-nav-link w-button">Login in</a>
                  
                    <a href="SignupView" target="_blank" className="af-class-nav-link w-button">Sign up</a>
                  
                    <a href="/AddItem" className="af-class-nav-link w-nav-link">Add Item</a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-container">
              <h2 className="af-class-heading-2">Sign up</h2><em className="af-class-italic-text">Fields marked with an asterisk (*) are required.</em>
              <div className="w-form">
                <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" data-name="Contact Form">
                  <div className="af-class-contact-form-grid">
                    <div id="w-node-f9b65ce6-9e2b-b100-af5a-09dc09ec1da8-e60ae88e"><label htmlFor="First-Name" id="contact-first-name" className="af-class-field-label-2">First name *</label><input type="text" className="w-input" maxLength={256} name="First-Name" data-name="First Name" id="First-Name" required /></div>
                    <div id="w-node-f9b65ce6-9e2b-b100-af5a-09dc09ec1dac-e60ae88e"><label htmlFor="Last-Name" id="contact-last-name" className="af-class-field-label-4">Last name *</label><input type="text" className="w-input" maxLength={256} name="Last-Name" data-name="Last Name" id="Last-Name" required /></div>
                    <div id="w-node-f9b65ce6-9e2b-b100-af5a-09dc09ec1db0-e60ae88e"><label htmlFor="Email" id="contact-email" className="af-class-field-label-3">Email *</label><input type="email" className="w-input" maxLength={256} name="Email" data-name="Email" id="Email" required /></div>
                    <div id="w-node-f9b65ce6-9e2b-b100-af5a-09dc09ec1db4-e60ae88e"><label htmlFor="Contact-Phone-Number" id="contact-phone" className="af-class-field-label-5">Phone number</label><input type="tel" className="w-input" maxLength={256} name="Contact-Phone-Number" data-name="Contact Phone Number" id="Contact-Phone-Number" /></div>
                  </div><input type="submit" defaultValue="Submit" data-wait="Please wait..." className="w-button" />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your account has been created!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
            <section id="contact-form" className="af-class-contact-form af-class-row" />
            <div className="af-class-footer">
              <div className="af-class-container">
                <div className="w-layout-grid af-class-footer-grid">
                  <div id="w-node-_67f7db32-28d2-9f37-8b84-a159dcc6da5a-dcc6da57" className="af-class-footer-column"><img src="images/Logo.svg" width={40} alt className="af-class-footer-logo" /></div>
                  <div className="af-class-columns w-row">
                    <div className="w-col w-col-6">
                      <div className="af-class-div-block-2" />
                      <div className="af-class-footer-column">
                        <a href="/IndexView" className="af-class-footer-link">Home</a>
                        <a href="/Login" className="af-class-footer-link">Login in</a>
                      </div>
                    </div>
                    <div className="af-class-footer-column2 w-col w-col-6">
                     
                      <a href="mya.todd428376@Gmail.com.com?subject=Contact" className="af-class-footer-link">Contact</a>
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

export default SignupView

/* eslint-enable */