import Joi from 'joi';

export const schema = Joi.object({
    title: Joi.string()
        .required()
        .min(3)
        .max(100)
        .messages({
            'string.base': `Заголовок має бути текстовим`,
            'string.empty': `Заголовок не може бути порожнім`,
            'string.min': `Заголовок має містити щонайменше {#limit} символи`,
            'string.max': `Заголовок має містити максимум {#limit} символів`,
            'any.required': `Заголовок є обов'язковим полем`
        }),
    body: Joi.string()
        .required()
        .min(10)
        .messages({
            'string.base': `Тіло посту має бути текстовим`,
            'string.empty': `Тіло посту не може бути порожнім`,
            'string.min': `Тіло посту має містити щонайменше {#limit} символів`,
            'any.required': `Тіло посту є обов'язковим полем`
        }),
    userId: Joi.number()
        .required()
        .messages({
            'number.base': `ID користувача має бути числом`,
            'number.empty': `ID користувача не може бути порожнім`,
            'any.required': `ID користувача є обов'язковим полем`
        }),
});
