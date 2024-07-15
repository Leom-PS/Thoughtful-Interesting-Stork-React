import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import SampleEnterprisePricing from './views/sample-enterprise-pricing'
import TrialRequestTemplate1 from './views/trial-request-template-1'
import LeomsLandingPage from './views/leoms-landing-page'
import EnterprisePricingCurrent from './views/enterprise-pricing-current'
import SampleLandingPageEnt from './views/sample-landing-page-ent'
import TrialRequestTemplate2 from './views/trial-request-template-2'
import Home from './views/home'
import SampleLandingPagePro from './views/sample-landing-page-pro'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={SampleEnterprisePricing}
          exact
          path="/sample-enterprise-pricing"
        />
        <Route
          component={TrialRequestTemplate1}
          exact
          path="/trial-request-template-1"
        />
        <Route component={LeomsLandingPage} exact path="/leoms-landing-page" />
        <Route
          component={EnterprisePricingCurrent}
          exact
          path="/enterprise-pricing-current"
        />
        <Route
          component={SampleLandingPageEnt}
          exact
          path="/sample-landing-page-ent"
        />
        <Route
          component={TrialRequestTemplate2}
          exact
          path="/trial-request-template-2"
        />
        <Route component={Home} exact path="/" />
        <Route
          component={SampleLandingPagePro}
          exact
          path="/sample-landing-page-pro"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
