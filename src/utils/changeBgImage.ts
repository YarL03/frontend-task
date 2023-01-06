export const changeBgImage = (length: number) => {
    let current = 0

    return () => {
        if (current + 1 === length) {
            current = 0
            return length - 1 
        }

        return current++
    }
}