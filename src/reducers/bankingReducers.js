const initialState = {
  balance: 0,
  isSavingsAccount: false

};

export const bankingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            //logic deposit
            return {...state, balance: state.balance + action.amount}
        case "WITHDRAW":
            //logic withdraw
            return {...state, balance: state.balance - action.amount}
        case "COLLECT_INTEREST":
            //logic interest
            return {...state, balance: state.balance*1.03}
        case "DELETE_ACCOUNT":
            return {balance: 0}
        case "TOGGLE_ACCOUNT":
            return {...state, isSavingsAccount: !state.isSavingsAccount}
        default:
            return state;
    }
}