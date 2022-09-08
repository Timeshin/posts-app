import { useState } from "react"

type useLocalStorageReturn = [
  storedValue: string | null,
  setValue: (newValue: string) => void
]

const useLocalStorage = (keyName: string): useLocalStorageReturn => {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    const value = window.localStorage.getItem(keyName)
    if (value) {
      return JSON.parse(value)
    }

    return null
  })
  
  const setValue = (newValue: string) => {
    window.localStorage.setItem(keyName, JSON.stringify(newValue))
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}

export default useLocalStorage
