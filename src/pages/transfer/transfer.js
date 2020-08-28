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
    execDate: '',
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

    formValidation.validateField('iban', transfer.targetIban).then(result => {
        onSetError('iban', result);
    });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        beneficiary: value,
    };
});

onUpdateField('amount', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        amount: value,
    };

    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
    });
});

onUpdateField('concept', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        concept: value,
    };

    formValidation.validateField('concept', transfer.concept).then(result => {
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
    };

    formValidation.validateField('day', transfer.day).then(result => {
        onSetError('day', result);
    });
});

onUpdateField('month', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        month: value,
    };

    formValidation.validateField('month', transfer.month).then(result => {
        onSetError('month', result);
    });
});

onUpdateField('year', event => {
    const value = event.target.value;
    transfer = {
        ...transfer,
        year: value,
    };

    formValidation.validateField('year', transfer.year).then(result => {
        onSetError('year', result);
    });
});

const getExecDate = () => {
    const newDate = `${transfer.year}-${transfer.month}-${transfer.day}`;
    transfer = {
        ...transfer,
        execDate: newDate,
    };

    formValidation.validateField('date-error', transfer.execDate).then(result => {
        onSetError('date-error', result);
    });
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
    console.log(transfer);

    formValidation.validateForm(transfer).then(result => {
        console.log(result);
        onSetFormErrors(result);
        if (result.succeeded) {
            sendTransfer(transfer);
        }
    })

});






