import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Route, HashRouter, Link} from 'react-router-dom'
import {AnimatedRoute, spring} from 'react-router-transition'
import ErrorBoundary from '../components/ErrorBoundary'
import './style.scss'

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.3),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function T() {
  return (
    <div>
      test1
    </div>
  )
}

class Test extends React.Component<any> {
  render() {
    return (
      <div>
        test2
      </div>
    )
  }
}

class Test2 extends React.Component<any> {
  render() {
    return (
      <ErrorBoundary>
        <h2>我是主视图内容</h2>
      </ErrorBoundary>
    )
  }
}

class View extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <Link to="/">/</Link>
            <Link to="/p1/">p1</Link>
            <Link to="/p2/">p2</Link>
          </div>
          {/*<AnimatedSwitch
            {...bounceTransition}
            mapStyles={mapStyles}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Test2}/>
            <Route path="/p1/" component={Test}/>
            <Route path="/p2/" component={T}/>
          </AnimatedSwitch>*/}
          <AnimatedRoute
            path="/p1/"
            component={Test2}
            atEnter={{ offset: 110 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
              transform: `translateX(${styles.offset}%)`,
            })}
          />
        </div>
      </HashRouter>
    )
  }
}

ReactDOM.render(<View/>, document.getElementById('app'))