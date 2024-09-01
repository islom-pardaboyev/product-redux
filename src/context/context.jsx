import React, { createContext, useState } from 'react'

export const MainContext = createContext()

function Context({children}) {
    const [refresh, setRefresh] = useState(false)
  return (
    <MainContext.Provider value={{refresh, setRefresh}}>{children}</MainContext.Provider>
  )
}

export default Context