import styles from './profile-form.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { ProfileFormType, ProfileFormTypePropTypes } from './types';
import Card from '../card/Card';
import TextButton from '../../components/text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../input-field/input-field';
import { useAuthSelector } from '../../store/selectors';

const ProfileForm: FC<ProfileFormTypePropTypes> = ({ className }) => {
  const { profile } = useAuthSelector();

  const signUpDate = profile?.signUpDate ? new Date(profile.signUpDate).toLocaleDateString('en-CA') : '';

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormType>({
    defaultValues: {
      email: profile?.email || '',
      date: signUpDate,
    },
  });

  const onConfirm: SubmitHandler<ProfileFormType> = ({ email, date }) => {
    console.log('(**)=> save profile: ', { email, date });
  };

  const emailRules: RegisterOptions = { required: 'Невалидный email', minLength: 3 };

  return (
    <Card>
      <form className={cn(className, styles.form)} onSubmit={handleSubmit(onConfirm)}>
        <Controller
          name="email"
          rules={emailRules}
          control={control as unknown as Control<FieldValues>}
          render={({ field }) => (
            <InputField
              placeholder="Ваш логин "
              error={errors.email && (`${errors.email.message}` || 'Не менее 3-х символов')}
              {...field}
            />
          )}
        />
        <Controller
          name="date"
          control={control as unknown as Control<FieldValues>}
          render={({ field: { ref, ...otherProps } }) => (
            <InputField
              type="date"
              placeholder="Дата регистрации"
              error={errors.date && `${errors.date.message}`}
              {...otherProps}
            />
          )}
        />
        <div className={cn(styles.buttons)}>
          <TextButton type="submit" state={TextButtonState.PRIMARY}>
            SAVE
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default ProfileForm;
