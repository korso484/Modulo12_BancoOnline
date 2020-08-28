import { history } from '../../core/router';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { getAccountList } from '../account-list/account-list.api';
import { onSubmitForm, onUpdateField, onSetError, onSetFormErrors } from '../../common/helpers';
import { sendTransfer } from './transfer.api';

const params = history.getParams();
console.log(params);

let transfer = {
    sourceIban: '',
    targetIban: '',
    beneficiary: '',
    amount: '',
    concept: '',
    observations: '',
    day: '',
    month: '',
    year: '',
    execDate: `${day}${month}${year}`,
    emailBeneficiary: '',

};


getAccountList().then(apiList => {
    setAccountOptions(apiList, params.id);
    apiList.forEach(account => {
        if (params.id === account.id) {
            transfer = {
                sourceIban: account.iban,
            };
        };
    });
});


onUpdateField('select-account', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        sourceIban: value.text,
    }
    console.log(transfer);
});

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        targetIban: value,
    };
    formValidation.validateField('iban', transfer.sourceIban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        beneficiary: value,
    };

    formValidation.validateField('iban', transfer.sourceIban).then(result => {
        onSetError('name', result);
    });
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount: value,
    };

    formValidation.validateField('iban', transfer.sourceIban).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value,
    };

    formValidation.validateField('iban', transfer.sourceIban).then(result => {
        onSetError('concept', result);
    });
});

onUpdateField('notes', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        observations: value,
    }
});

onUpdateField('day', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        day: value,
    }
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        month: value,
    }
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        year: value,
    }
});

const getExecDate = () => {
    const newDate = `${transfer.day}/${transfer.month}/${transfer.year}`;
    transfer = {
        ...transfer,
        execDate: newDate,
    };
};



onUpdateField('email', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        emailBeneficiary: value,
    };

    formValidation.validateField('email', transfer.emailBeneficiary).then(result => {
        onSetError('email', result);
    });
});



onSubmitForm('transfer-button', event => {
    getExecDate();
    formValidation.validateForm(transfer).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            console.log(result);
        }
    })
    console.log(transfer);
});






