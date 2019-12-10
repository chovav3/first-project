import { DependencyList, useEffect } from 'react'

export const useExpressionEffect = (effect: () => any, deps?: DependencyList) => useEffect(
  () => {
    effect()
  },
  [deps]
)