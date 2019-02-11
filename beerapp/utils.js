import { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

// useDebounce code from https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      // Return a cleanup function that will be called every time ...
      // ... useEffect is re-called. useEffect will only be re-called ...
      // ... if value changes (see the inputs array below).
      // This is how we prevent debouncedValue from changing if value is ...
      // ... changed within the delay period. Timeout gets cleared and restarted.
      // To put it in context, if the user is typing within our app's ...
      // ... search box, we don't want the debouncedValue to update until ...
      // ... they've stopped typing for more than 500ms.
      return () => {
        clearTimeout(handler)
      }
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value]
  )

  return debouncedValue
}

export const usePersistedState = (key, defaultValue) => {
  {
    const [value, setValue] = useState(defaultValue)
    const [initialized, setInitialized] = useState(false)
    useEffect(async () => {
      const storedValue = await AsyncStorage.getItem(key)
      if (storedValue) setValue(JSON.parse(storedValue))
      else await AsyncStorage.setItem(key, JSON.stringify(defaultValue))
      setInitialized(true)
    }, [])
    const setAndStoreValue = async (newValue) => {
      setValue(newValue)
      await AsyncStorage.setItem(key, JSON.stringify(newValue))
    }
    return [value, setAndStoreValue, initialized]
  }
}
