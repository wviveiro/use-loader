# useLoader

Show loading before loading your react component. It uses React hooks

## Install
```
npm i wviveiro/use-loader
```

## Usage
```javascript
import React, {useEffect} from 'react'
import useLoader from 'use-loader';

const Component = () => {
  const [loader, setLoaded, setError] = useLoader();

  useEffect(() => {
      setTimeout(() => {
          setError('There is an error!');
      }, 3000);

      setTimeout(() => {
          setLoaded(true);
      }, 6000);
  }, [setError, setLoaded]);

  if (loader.notReady()) return loader.showContent();

  return (
      <div>Hello World!</div>
  );
}

export default Component;

```