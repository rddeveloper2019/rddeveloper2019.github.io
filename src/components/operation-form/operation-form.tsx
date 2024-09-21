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
import { Category } from '../../model/types';
import { SelectField } from '../select-field';
import { useAppDispatch } from '../../store/store';
import { hideModal } from '../../store/slices/modalSlice';

export const categoriesById: { [key: string]: Category } = {
  1: { id: '1', name: 'одежда', photo: 'https://i.pinimg.com/originals/81/3c/be/813cbeb756bed0a23e6dbf581bfcfd8a.png' },
  2: {
    id: '2',
    name: 'лекарства',
    photo: 'https://wega55.ru/assets/images/resources/574/360x270/41-cdc4294e2a3f333d2ac9c17af76ee5ed.jpg',
  },
  3: {
    id: '3',
    name: 'еда',
    photo: 'https://visitukraine.today/media/blog/previews/t49F6991IC8wJgcLrNFBZeZhvyIHmVMauusz8lbQ.jpg',
  },
};

const OperationForm: FC<OperationFormPropTypes> = ({ operation, onOperationFormSubmit }) => {
  const dispatch = useAppDispatch();
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
      createdAt,
      amount: operation?.amount?.toString() ?? '',
      category: operation?.category?.id ?? '',
      photo: operation?.category?.photo ?? '',
    },
  });

  const closeModal = () => {
    clearErrors();
    reset();
    dispatch(hideModal());
  };
  const onCancel = () => {
    closeModal();
  };

  const onConfirm: SubmitHandler<OperationFormType> = (data) => {
    onOperationFormSubmit?.(data);
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
          name="category"
          control={control as unknown as Control<FieldValues>}
          render={({ field: { onChange, ...rest } }) => (
            <SelectField onChange={onChange} {...rest} options={Object.values(categoriesById)} />
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
