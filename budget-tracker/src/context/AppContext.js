const initialState = {
    budget: 6000,
    expenses: [
        { id: 12, name: 'Rent', cost: 40 },
        { id: 13, name: 'Construction', cost: 400 },
        { id: 14, name: 'Sacco ', cost: 50 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                budget: state.budget,
                expenses: state.expenses,
                dispatch,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};