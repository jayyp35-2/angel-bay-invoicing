import CONSTANTS from "./constants";
import { singleOrderItem } from "./invoice_constants";

const initialState = {
    buyer_details: {
        name: "",
        person: "",
        contact: "",
        email: "",
        altContact: "",
        addr1: "",
        addr2: "",
        landmark: "",
        pincode: ""
    },
    order_details: []
}

const changeBuyerDetails = (state, action) => {
    return {
        ...state,
        buyer_details: {
            ...state.buyer_details,
            [action.payload.key]: action.payload.value
        }
    }
}

const createOrder = (state) => {
    const new_order = JSON.parse(JSON.stringify(singleOrderItem))
    return {
        ...state,
        order_details: [new_order]
    }
}

const addStyle = (state) => {
    const new_order = JSON.parse(JSON.stringify(singleOrderItem))
    return {
        ...state,
        order_details: [...state.order_details, new_order]
    }
}

const changeOrderDetails = (state, action) => {
    const new_details = JSON.parse(JSON.stringify(state.order_details));
    new_details[action.payload.index] = {
        ...new_details[action.payload.index],
        [action.payload.key]: action.payload.value
    }
    return {
        ...state,
        order_details: [...new_details]
    }
}

const changeOrderSizes = (state, action) => {
    const new_details = JSON.parse(JSON.stringify(state.order_details));
    new_details[action.payload.index] = {
        ...new_details[action.payload.index],
        sizes: {
            ...new_details[action.payload.index].sizes,
            [action.payload.key]: action.payload.value
        }
    }
    return {
        ...state,
        order_details: [...new_details]
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.CHANGE_BUYER_DETAILS: return changeBuyerDetails(state, action);
        case CONSTANTS.CREATE_ORDER: return createOrder(state, action);
        case CONSTANTS.ADD_STYLE: return addStyle(state, action);
        case CONSTANTS.CHANGE_ORDER_DETAILS: return changeOrderDetails(state, action);
        case CONSTANTS.CHANGE_ORDER_SIZES: return changeOrderSizes(state, action);
        default: return state;
    }
}

export default reducer;