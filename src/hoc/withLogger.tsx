import { useEffect } from 'react';

function withLogger<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  function WithLogger(props: P) {
    useEffect(() => {
      console.log(`${WrappedComponent.name} mounted`);

      return () => {
        console.log(`${WrappedComponent.name} unmounted`);
      };
    }, []);

    return <WrappedComponent {...props} />;
  }

  WithLogger.displayName = `WithLogger(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithLogger;
}

export default withLogger;