import React, { useContext, useState } from 'react';
import Modal from '../modal/modal';
import Card from '../card/Card';
import { MainContext } from '../../store/provider';
import TextButton from '../text-button/text-button';
import { TextButtonState } from '../text-button/types';
import styles from './modal-control.module.scss';
import { Portal } from '../portal/Portal';
import { useTranslation } from 'react-i18next'; // Импортируем компонент Portal

export const ModalControl = () => {
  const { modal, setModal } = useContext(MainContext);
  const [text, setText] = useState('');
  const { t } = useTranslation();
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setText(value);
  };
  const showModal = () => {
    setModal(true);
  };
  const hideModal = () => {
    setModal(false);
  };
  return (
    <>
      <Card width={300}>
        <div className={styles.control}>
          <input
            className={styles.input}
            onChange={onChange}
            type="text"
            value={text}
            placeholder={t('additional.enter-text').toUpperCase()}
          />
          <TextButton handleClick={showModal} state={TextButtonState.PRIMARY}>
            {t('additional.show-modal')}
          </TextButton>
        </div>
      </Card>

      <Portal>
        <Modal
          visible={modal}
          confirmButtonText={t('modal.agree')}
          onConfirm={hideModal}
          cancelButtonText={t('modal.cancel')}
          onCancel={hideModal}
          backgroundClickHandler={hideModal}
        >
          <div>{text}</div>
        </Modal>
      </Portal>
    </>
  );
};
