import React, {useEffect, useRef} from "react";

export const useObserver = <T extends Element>(ref: React.MutableRefObject<T | null>, canLoad: boolean, callback: () => void) => {
    const observer = useRef<IntersectionObserver | null>(null)

    useEffect(() => {
        if(observer.current)
            observer.current.disconnect()

        let observerCallback = function (entries: IntersectionObserverEntry[]) {
            if (entries[0].isIntersecting && canLoad) {
                callback()
            }
        }
        observer.current = new IntersectionObserver(observerCallback);
        observer.current.observe(ref.current!)
    }, [ref, canLoad, callback])
}