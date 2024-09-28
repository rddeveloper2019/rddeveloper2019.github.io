import styles from './operation-form.module.scss';
import React, { FC } from 'react';
import cn from 'clsx';
import { OperationFormPropTypes, OperationFormType } from './types';
import InputField from '../input-field/input-field';
import Card from '../card/Card';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';
import { Control, Controller, FieldValues, RegisterOptions, SubmitHandler, useForm } from 'react-hook-form';
import TextareaField from '../textarea-field/textarea-field';
import { SelectField } from '../select-field';
import { useCategoriesSelector } from '../../store/selectors';

const OperationForm: FC<OperationFormPropTypes> = ({ operation, onOperationFormSubmit, onCancel }) => {
  const { categories } = useCategoriesSelector();
  const createdAt = operation?.createdAt ? new Date(operation.createdAt).toLocaleDateString('en-CA') : '';

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
      date: createdAt,
      amount: operation?.amount?.toString() ?? '',
      categoryId: operation?.category?.id ?? '',
      photo: operation?.photo ?? '',
    },
  });

  const closeModal = () => {
    clearErrors();
    reset();
    onCancel?.();
  };

  const onConfirm: SubmitHandler<OperationFormType> = (data) => {
    clearErrors();
    reset();
    data.date = new Date(data.date).toISOString();
    onOperationFormSubmit?.(data);
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
          name="categoryId"
          control={control as unknown as Control<FieldValues>}
          render={({ field: { onChange, ...rest } }) => (
            <SelectField onChange={onChange} {...rest} options={categories} value={operation?.category?.id} />
          )}
        />
        <Controller
          name="date"
          control={control as unknown as Control<FieldValues>}
          rules={dateRules}
          render={({ field: { ref, ...otherProps } }) => (
            <InputField
              type="date"
              placeholder="дата операции"
              error={errors.date && `${errors.date.message}`}
              {...otherProps}
            />
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
          <TextButton handleClick={closeModal} type="button" state={TextButtonState.SECONDARY}>
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
