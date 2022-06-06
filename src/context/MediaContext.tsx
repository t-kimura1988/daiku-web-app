import React, {createContext, FC, useContext, useMemo} from "react";
import {useMedia} from "use-media";

type Props = {
    children: React.ReactNode
}

type Context = {
    isMobile: boolean,
    isTablet: boolean,
    isPc: boolean
}

const MediaQueryContext = createContext<Context>( {
    isMobile: false,
    isTablet: false,
    isPc: false
})

const mediaQueries = {
    mobile: '(max-width: 519px)',
    tablet: '(min-width: 520px) and (max-width: 959px)',
    pc: '(min-width: 960px)'
}

export const MediaQueryProvider: FC<Props> = ({children} : Props) => {
    const isMobile = useMedia(mediaQueries.mobile)
    const isTablet = useMedia(mediaQueries.tablet)
    const isPc = useMedia(mediaQueries.pc)
    const value = useMemo(() => ({isMobile, isTablet, isPc}),[
        isMobile,
        isTablet,
        isPc
    ])
    return (
        <MediaQueryContext.Provider value={value}>
            {children}
        </MediaQueryContext.Provider>
    )
}

export const useMediaQueryContext = (): Context => useContext(MediaQueryContext)