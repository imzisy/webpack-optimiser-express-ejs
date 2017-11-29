export function setAmount(amount) {
    return {
        type: "SET_AMOUNT",
        payload: {
            amount
        }
    };
}

export function setIslamic(islamic) {
    return {
        type: "SET_ISLAMIC",
        payload: {
            islamic
        }
    };
}

export function setTenure(tenure) {
    return {
        type: "SET_TENURE",
        payload:{
            tenure
        }
    };
}

export function init() {
    return {
        type: "INIT",
    };
}


