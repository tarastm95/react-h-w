import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { schema } from './validation';
import axios from 'axios';

interface PostFormInputs {
    title: string;
    body: string;
    userId: number;
}

const PostForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<PostFormInputs>({
        resolver: joiResolver(schema),
    });

    const onSubmit: SubmitHandler<PostFormInputs> = async (data) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="title">Заголовок</label>
                <input id="title" {...register('title')} />
                {errors.title && <span>{errors.title.message}</span>}
            </div>

            <div>
                <label htmlFor="body">Тіло посту</label>
                <textarea id="body" {...register('body')} />
                {errors.body && <span>{errors.body.message}</span>}
            </div>

            <div>
                <label htmlFor="userId">ID користувача</label>
                <input type="number" id="userId" {...register('userId')} />
                {errors.userId && <span>{errors.userId.message}</span>}
            </div>

            <button type="submit">Надіслати</button>
        </form>
    );
};

export default PostForm;
