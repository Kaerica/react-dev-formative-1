import { useEffect } from 'react'
import type { ComponentType } from 'react'

export default function withLogger<T extends object>(
  WrappedComponent: ComponentType<T>,
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  function WithLogger(props: T) {
    useEffect(() => {
      console.log(`${displayName} mounted`)
    }, [])

    return <WrappedComponent {...props} />
  }

  WithLogger.displayName = `WithLogger(${displayName})`

  return WithLogger
}
