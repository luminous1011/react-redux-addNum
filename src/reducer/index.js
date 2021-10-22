const init = {
    count: 0
}

export const reducer = (state = init, action) => {
    return {
        count: state.count+1
    }
}