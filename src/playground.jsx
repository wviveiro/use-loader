import React, {useEffect} from 'react'
import useLoader from './lib';
import './playgrond.scss';
import './styles/index.scss';


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

function Playground() {
  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>Here you can play with you component before publishing it.</p>
      <Component />
    </div>
  );
}

export default Playground;
