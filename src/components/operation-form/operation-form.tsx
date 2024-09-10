import styles from './operation-form.module.scss';
import React, { FC, useContext } from 'react';
import cn from 'clsx';
import { OperationFormPropTypes, OperationFormType } from './types';
import InputField from '../input-field/input-field';
import Card from '../card/Card';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import { MainContext } from '../../store/provider';
import TextareaField from '../textarea-field/textarea-field';

const OperationForm: FC<OperationFormPropTypes> = ({ operation }) => {
  const { setModal, setIsAuth } = useContext(MainContext);

  const {
    control,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm<OperationFormType>({
    defaultValues: {
      name: operation?.name ?? '',
      desc: operation?.desc ?? '',
      createdAt: operation?.createdAt ?? '',
      amount: operation?.amount?.toString() ?? '',
      category: operation?.category?.name ?? '',
      photo: operation?.category?.photo ?? '',
    },
  });

  const closeModal = () => {
    clearErrors();
    reset();
    setModal(false);
  };
  const onCancel = () => {
    closeModal();
  };

  const onConfirm: SubmitHandler<OperationFormType> = (data) => {
    console.log('## -onConfirm data: ', data);
    closeModal();
  };

  const nameRules: RegisterOptions = { required: 'Невалидное название операции', minLength: 3 };
  const amountRules: RegisterOptions = { required: 'Невалидная сумма операции' };
  const dateRules: RegisterOptions = { required: 'Невалидная дата операции' };

  return (
    <Card>
      <form className={cn(styles.form)} onSubmit={handleSubmit(onConfirm)}>
        <Controller
          name="name"
          control={control as unknown as Control<FieldValues>}
          rules={nameRules}
          render={({ field: { ref, ...otherProps } }) => (
            <InputField
              placeholder="имя операции"
              error={errors.name && (`${errors.name.message}` || 'Не менее 3-х символов')}
              {...otherProps}
            />
          )}
        />
        <Controller
          name="amount"
          control={control as unknown as Control<FieldValues>}
          rules={amountRules}
          render={({ field: { ref, ...otherProps } }) => (
            <InputField
              type="number"
              placeholder="сумма операции"
              error={errors.amount && (`${errors.amount.message}` || 'Не менее 3-х символов')}
              {...otherProps}
            />
          )}
        />
        <Controller
          name="createdAt"
          control={control as unknown as Control<FieldValues>}
          rules={dateRules}
          render={({ field: { ref, ...otherProps } }) => (
            <InputField
              type="date"
              placeholder="дата операции"
              error={errors.createdAt && `${errors.createdAt.message}`}
              {...otherProps}
            />
          )}
        />
        <Controller
          name="category"
          control={control as unknown as Control<FieldValues>}
          defaultValue="female"
          render={({ field: { ref, ...otherProps } }) => (
            <InputField placeholder="категория операции" {...otherProps} />
          )}
        />
        <Controller
          name="photo"
          control={control as unknown as Control<FieldValues>}
          render={({ field: { ref, ...otherProps } }) => <InputField placeholder="изображение" {...otherProps} />}
        />
        <Controller
          name="desc"
          control={control as unknown as Control<FieldValues>}
          render={({ field: { ref, ...otherProps } }) => (
            <TextareaField placeholder="дополнительная информация" {...otherProps} />
          )}
        />

        <div className={cn(styles.buttons)}>
          <TextButton handleClick={onCancel} type="button" state={TextButtonState.SECONDARY}>
            Cancel
          </TextButton>

          <TextButton type="submit" state={TextButtonState.PRIMARY}>
            OK
          </TextButton>
        </div>
      </form>
    </Card>
  );
};

export default OperationForm;
