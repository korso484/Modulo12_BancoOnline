const mapMovementsFromApiToViewModel = movement => {
    return {
        description: movement.description,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    };
};

export const mapMovementListFromApiToViewModel = movementList => {
    return movementList.map(movement =>
        mapMovementsFromApiToViewModel(movement));
};