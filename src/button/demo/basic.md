---
nav:
  title: Components
  path: /components
---

## Button

Demo:

The simplest usage.

``` jsx
import React from 'react';
import { Button } from 'UI';

class Demo extends React.Component {

  render() {
    return (
      <div>
        <Button>测试点击 </Button>
        <br />
         <Button type='primary'>Affix bottom </Button>
      </div>
    );
  }
}

export default () => <Demo title="First Demo" />;
````
