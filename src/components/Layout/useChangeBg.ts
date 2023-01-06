import { useEffect, useState } from 'react';

import api from '../../api/api';

import { IBackground } from '../../api/api.interface';

import { changeBgImage } from '../../utils/changeBgImage';

export const useChangeBg = () => {
    const [images, setImages] = useState<IBackground[]>([])
    const [url, setUrl] = useState<string>('')
    
    useEffect(() => {
        let interval: number
        let firstTime = true

        if (!images.length) {
            api.getBgImages()
                .then(imgs => setImages(imgs))
        }

        if (firstTime && images.length) {
            const cb = firstTime && changeBgImage(images.length)

            setUrl(images[0].url)

            firstTime = false

            interval = setInterval(() => setUrl(images[cb()].url), 5000)
        }

        return () => {
            interval && clearInterval(interval)
        }


    }, [images.length])

    return url
}