export const increment=(n)=>{
    return {
        type:"INCREMENT",
        payload:n
    }
}
export const decrement=()=>{
    return {
        type:"DECREMENT"
    }
}
export const sign=()=>{
    return {
        type:"SIGN_UP"
    }
}