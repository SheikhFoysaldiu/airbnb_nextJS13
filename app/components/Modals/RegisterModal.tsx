'use client'
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import {useState, useCallback} from 'react';

import {FieldValues, SubmitHandler, useForm} from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const [loading, setLoading] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm <FieldValues> (
        {
            defaultValues: {
                name: '',
                email: '',
                password: '',
            }
        }
    );

    const onSubmit: SubmitHandler<FieldValues> = (data) => {  
        setLoading(true);
        try {
           
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);

        }
    };


    return (
        <Modal
            
            disabled={loading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel='Continue'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}

        />
    )
}
export default RegisterModal;