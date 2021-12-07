import { useState, useEffect } from 'react'

let globalState = {}
let listeners = []
let actions = {}


const useStore = () => {
  const setState = useState(globalState)[1]

  const dispatch = (actionIdentifer) => {
    const newState = actions[actionIdentifer](globalState)
    globalState = { ...globalState, ...newState }

    for (let listener of listeners) {
      listener(globalState)
    }
  }
  useEffect(() => {
    listeners.push(setState)
    return () => {
      listeners = listeners.filter(li => li !== setState)
    }
  }, [])
}