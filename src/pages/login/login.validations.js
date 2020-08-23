import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        user: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.email,
                message: 'email no valido',
            }],

        password: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }],
    },
};

export const formValidation = createFormValidation(validationSchema);