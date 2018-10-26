import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ margin: 12 }}>
      <div style={{ display: 'flex' }}>
        <Button onClick={() => setCount(count - 1)} icon>
          <Icon name="minus" />
        </Button>
        <div style={{ padding: 8 }}>{count}</div>
        <Button onClick={() => setCount(count + 1)} icon>
          <Icon name="plus" />
        </Button>
      </div>
    </div>
  );
};

export default Counter;
