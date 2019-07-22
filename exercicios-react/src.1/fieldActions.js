export function changeValue(e){
    return {
        type: 'VALUE_CHANGED',
        value: e.target.value
    }
}