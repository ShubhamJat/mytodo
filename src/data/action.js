export const add = (topic) => {
    return {
        type : 'ADD',
        data : topic
    }
}
export const remove = (key) => {
    return {
        type : 'REMOVE',
        data : key
    }
}