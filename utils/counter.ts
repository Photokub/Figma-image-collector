const itemsPerRow = 10;

export function positionCounter() {

    function counter() {
        if (counter.value == itemsPerRow) {
            return counter.value = 1
        } else {
            return counter.value++
        }
    }

    counter.value = 0
    return counter
}