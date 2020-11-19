---
nav:
  title: Components
  path: /components
---

## Affix

Demo:

The simplest usage.

````jsx
import React from 'react';
import { Affix } from 'UI';

class Demo extends React.Component {
  state = {
    top: 10,
    bottom: 10,
  }

  render() {
    return (
      <div>
        <Affix offsetTop={this.state.top}>
             <button>Affix top </button>
        </Affix>
        <br />
        <Affix offsetBottom={this.state.bottom}>
             <button>Affix bottom </button>
        </Affix>
      </div>
    );
  }
}

export default () => <Demo title="First Demo" />;
````
