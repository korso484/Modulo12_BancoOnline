import { history } from '../../core/router';
import { getMovementsById } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers'
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { getAccount } from '../account/account.api';
import { mapAccountFromApiToViewModel } from '../account/account.mappers';

const params = history.getParams();
console.log(params);

getAccount(params.id).then(apiAccount => {
    const account = mapAccountFromApiToViewModel(apiAccount);
    onSetValues(account);
});

getMovementsById(params.id).then(apiMovement => {
    const viewMovement = mapMovementListFromApiToViewModel(apiMovement);
    addMovementRows(viewMovement);
});