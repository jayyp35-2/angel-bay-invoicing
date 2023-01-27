import CONSTANTS from "./constants"

export const changeBuyerDetails = (payload) => {
  return {
    type: CONSTANTS.CHANGE_BUYER_DETAILS,
    payload
  }
}

export const createOrder = () => {
  return {
    type: CONSTANTS.CREATE_ORDER
  }
}

export const addStyle = () => {
  return {
    type: CONSTANTS.ADD_STYLE
  }
}

export const changeOrderDetails = (payload) => {
  return {
    type: CONSTANTS.CHANGE_ORDER_DETAILS,
    payload
  }
}

export const changeOrderSizes = (payload) => {
  return {
    type: CONSTANTS.CHANGE_ORDER_SIZES,
    payload
  }
}