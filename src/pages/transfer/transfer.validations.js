import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        email: [
            {
                validator: Validators.email,
                message: 'Introduzca un email válido',
            }
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);