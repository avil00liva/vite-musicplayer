import { createContext, useContext, useEffect, useState } from "react"
import musicData from "../assets/mocks/mockData"

const dataContext = createContext()

export function DataContext({children}) {
    const [mock, setMock]=useState(musicData)
    const [selectedSong, setSelectedSong]=useState({})

    return (
        <dataContext.Provider value={{
            mock,
            setMock,
            selectedSong,
            setSelectedSong
        }}>
            {children}
        </dataContext.Provider>
    )

}

export function useMock() {
    return useContext(dataContext)
}
