export interface Status {
    code: string;
    description: string;
}

export const statuses: Status[] = [
    {
        code: 'WAIT_EXPIRED_RESPONSE_RETURNED',
        description: 'Ожидание ответа. Срок нарушен - Возвращено',
    },
    {
        code: 'RETURNED_FOR_REWORK',
        description: 'Подготовка - возвращено на доработку',
    },
    {
        code: 'RESPONSE_RECEIVED',
        description: 'Ответ получен',
    },
    {
        code: 'AUTHORIZATION_MULTIPART',
        description: 'Ответ на проверке (составное обращение)',
    },
    {
        code: 'SENT_CLONE',
        description: 'Ответ отправлен в САДД БР (Дубль)',
    },
    {
        code: 'RETURNED_ATYPICAL',
        description: 'Возвращено на доработку (нетиповое обращение)',
    },
    {
        code: 'AUTHORIZATION_INSTRUCTION_REPORT',
        description: 'Проверка отчета об исполнении поручения',
    },
    {
        code: 'SENT_OUT_OF_COMPETENCE',
        description: 'Ответ отправлен в САДД БР (вне компетенции Банка России)',
    },
    {
        code: 'SIGNATURE',
        description: 'Подписание',
    },
    {
        code: 'CLOSED_CLONE',
        description: 'Закрыто (Дубль)',
    },
    {
        code: 'MULTIPART_CHECK',
        description: 'Проверка классификации как составного',
    },
    {
        code: 'WAIT_PART_RESPONSE_RECEIVED',
        description: 'Ожидание ответа (ответ получен не в полном объеме)',
    },
    {
        code: 'SENT_ATYPICAL',
        description: 'Ответ отправлен в САДД БР (нетиповое обращение)',
    },
    {
        code: 'RESPONSE_PREPARATION_TYPICAL',
        description: 'Подготовка ответа (типовое обращение)',
    },
    {
        code: 'CORRUPTED',
        description: 'Переоткрыто (Повреждено)',
    },
    {
        code: 'SENT_FOR_OUT_PROCESSING',
        description: 'Перенаправлено в САДД БР (обработка вне ФПС)',
    },
    {
        code: 'IN_PROGRESS_RESPONSE',
        description: 'Подготовка ответа',
    },
    {
        code: 'SENT',
        description: 'Отправлен в САДД БР',
    },
    {
        code: 'WAITING_REGISTRATION_RK',
        description: 'Ожидание регистрации РК',
    },
    {
        code: 'REGISTRATION_RKPD_ERROR',
        description: 'Ошибка регистрации РКПД',
    },
    {
        code: 'RETURNED_RECOGNITION',
        description: 'Возвращено на доработку (распознавание документов)',
    },
    {
        code: 'CLOSED_TYPICAL',
        description: 'Закрыто (типовое обращение)',
    },
    {
        code: 'SENT_WITHOUT_ANSWER',
        description: 'Ответ отправлен в САДД БР (не требует ответа)',
    },
    {
        code: 'WAITING_FOR_ATTACHMENTS',
        description: 'Прикрепление сканированных документов',
    },
    {
        code: 'REGISTRATION_RK_ERROR',
        description: 'Ошибка регистрации РК',
    },
    {
        code: 'CANCELED',
        description: 'Отменено',
    },
    {
        code: 'WAITING_REGISTRATION_RKPD',
        description: 'Ожидание регистрации РКПД',
    },
    {
        code: 'SIGNATURE_RKPD_ERROR',
        description: 'Ошибка подписания РКПД',
    },
    {
        code: 'WAIT_PROLONGED_RESPONSE',
        description: 'Ожидание ответа. Срок продлен',
    },
    {
        code: 'AUTHORIZATION_RESPONSE',
        description: 'Проверка ответа',
    },
    {
        code: 'CLOSED',
        description: 'Закрыто',
    },
    {
        code: 'CHILD_CANCELLED',
        description: 'Дочернее обращение отменено',
    },
    {
        code: 'CLOSED_MANUAL',
        description: 'Закрыто (Ручное обращение)',
    },
    {
        code: 'VIEW_CONCLUSION',
        description: 'На ознакомлении',
    },
    {
        code: 'WAIT_PROLONGED_PART_RESPONSE_RECEIVED',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок продлен',
    },
    {
        code: 'RETURNED_PRIMARY_AUTHORIZATION',
        description: 'Возвращено на доработку (первичная авторизация)',
    },
    {
        code: 'WAITING_SEND_EPVV',
        description: 'Ожидание отправки в ЕПВВ',
    },
    {
        code: 'EXPIRED_RESPONSE_RECEIVED_RETURNED',
        description: 'Ответ получен. Срок нарушен - Возвращено',
    },
    {
        code: 'WAIT_DELIVERY_RETURNED',
        description: 'Ожидание доставки - Возвращено',
    },
    {
        code: 'WAITING_FOR_TERMINATION_AUTHORIZATION',
        description: 'Авторизация прекращения обработки обращения',
    },
    {
        code: 'RETURNED_FOR_REWORK_RESPONSE',
        description: 'Подготовка ответа - возвращено на доработку',
    },
    {
        code: 'WAIT_PART_RESPONSE_RECEIVED_RETURNED',
        description: 'Ожидание ответа (ответ получен не в полном объеме) - Возвращено',
    },
    {
        code: 'WAIT_PROLONG_EXPIRED_PART_RESPONSE_RETURNED',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок нарушен. Срок продлен - Возвращено',
    },
    {
        code: 'SENT_ADDITIONAL',
        description: 'Ответ отправлен в САДД БР (Дополнение)',
    },
    {
        code: 'WAIT_PROLONG_PART_RESPONSE_RECEIVED_RETURNED',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок продлен - Возвращено',
    },
    {
        code: 'EXPIRED_RESPONSE_RECEIVED',
        description: 'Ответ получен. Срок нарушен',
    },
    {
        code: 'SECOND_AUTHORIZATION',
        description: 'Повторная проверка',
    },
    {
        code: 'RESPONSE_PREPARATION_ATYPICAL',
        description: 'Подготовка ответа (нетиповое обращение)',
    },
    {
        code: 'RETURNED_OUT_OF_COMPETENCE',
        description: 'Возвращено на доработку (вне компетенции Банка России)',
    },
    {
        code: 'REGISTERED',
        description: 'Зарегистрировано',
    },
    {
        code: 'ENRICHMENT',
        description: 'Обогащение и типологизация',
    },
    {
        code: 'RETURNED_TYPICAL',
        description: 'Возвращено на доработку (типовое обращение)',
    },
    {
        code: 'PRIMARY_AUTHORIZATION',
        description: 'Ответ на первичной проверке',
    },
    {
        code: 'RESPONSE_RECEIVED_RETURNED',
        description: 'Ответ получен - Возвращено',
    },
    {
        code: 'WAITING_FOR_LINK_AUTHORIZATION',
        description: 'Ожидает решения по обработке обращения',
    },
    {
        code: 'POSTAL_ID_REQUIRED',
        description: 'Требует ввода почтового идентификатора',
    },
    {
        code: 'RESPONSE_READY_OUT_OF_COMPETENCE',
        description: 'Ответ подготовлен (вне компетенции Банка России)',
    },
    {
        code: 'SENT_COPY',
        description: 'Ответ отправлен в САДД БР (Копия)',
    },
    {
        code: 'CLOSED_WITHOUT_ANSWER',
        description: 'Закрыто (Не требует ответа)',
    },
    {
        code: 'IN_PROGRESS_INSTRUCTION_REPORT',
        description: 'Подготовка отчета об исполнении',
    },
    {
        code: 'RETURNED_TYPOLOGIZATION_CHECK',
        description: 'Возвращено на доработку (проверка типологизации)',
    },
    {
        code: 'RESPONSE_READY_ATYPICAL',
        description: 'Ответ подготовлен (нетиповое обращение)',
    },
    {
        code: 'IN_PROGRESS',
        description: 'Обработка',
    },
    {
        code: 'NOT_EXECUTED',
        description: 'Не исполнено',
    },
    {
        code: 'VIEW_REPORT',
        description: 'На ознакомлении',
    },
    {
        code: 'INSTRUCTION_EXECUTED',
        description: 'На исполнении',
    },
    {
        code: 'CLOSED_FOR_OUT_PROCESSING',
        description: 'Закрыто (обработка вне ФПС)',
    },
    {
        code: 'CHILD_STOPPED_ATYPICAL',
        description: 'Обработка прекращена (нетиповое обращение)',
    },
    {
        code: 'WAIT_PROLONGED_EXPIRED_RESPONSE',
        description: 'Ожидание ответа. Срок нарушен. Срок продлен',
    },
    {
        code: 'POSTAL_ID_REQUIRED_RETURNED',
        description: 'Требует ввода почтового идентификатора - Возвращено',
    },
    {
        code: 'REPEATED_AUTHORIZATION',
        description: 'Ответ на повторной проверке',
    },
    {
        code: 'WAIT_EXPIRED_PART_RESPONSE_RECEIVED',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок нарушен',
    },
    {
        code: 'TYPOLOGIZATION_CHECK',
        description: 'Проверка типологизации',
    },
    {
        code: 'RESPONSE_PREPARATION_MULTIPART',
        description: 'Подготовка ответа (составное обращение)',
    },
    {
        code: 'CHILD_CREATION',
        description: 'Создание/изменение дочерних тематик',
    },
    {
        code: 'AUTHORIZATION_ATYPICAL',
        description: 'Ответ на проверке (нетиповое обращение)',
    },
    {
        code: 'CLOSED_MULTIPART',
        description: 'Закрыто (составное обращение)',
    },
    {
        code: 'WAIT_EXPIRED_PART_RESPONSE_RECEIVED_RETURNED',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок нарушен - Возвращено',
    },
    {
        code: 'WAIT_PROLONG_RESPONSE_RETURNED',
        description: 'Ожидание ответа. Срок продлен - Возвращено',
    },
    {
        code: 'AUTHORIZATION_TYPICAL',
        description: 'Ответ на проверке (типовое обращение)',
    },
    {
        code: 'SENT_MULTIPART',
        description: 'Ответ отправлен в САДД БР (составное обращение)',
    },
    {
        code: 'CLOSED_ADDITIONAL',
        description: 'Закрыто (Дополнение)',
    },
    {
        code: 'RETURNED_CLASSIFICATION_CHECK',
        description: 'Возвращено на доработку (проверка классификации как составного)',
    },
    {
        code: 'CLOSED_OUT_OF_COMPETENCE',
        description: 'Закрыто (вне компетенции Банка России)',
    },
    {
        code: 'CANCELED_MANUAL',
        description: 'Ручное обращение отменено',
    },
    {
        code: 'CLOSED_ATYPICAL',
        description: 'Закрыто (нетиповое обращение)',
    },
    {
        code: 'WAITING_SIGNATURE_SADD',
        description: 'Ожидание подписания в САДД',
    },
    {
        code: 'RETURNED_MULTIPART',
        description: 'Возвращено на доработку (составное обращение)',
    },
    {
        code: 'COMPLETED',
        description: 'Исполнено',
    },
    {
        code: 'LINK_AUTHORIZED',
        description: 'Авторизована связь с другим обращением',
    },
    {
        code: 'WAIT_RESPONSE_RETURNED',
        description: 'Ожидание ответа - Возвращено',
    },
    {
        code: 'CHILD_STOPPED_OUT_OF_COMPETENCE',
        description: 'Обработка прекращена (вне компетенции Банка России)',
    },
    {
        code: 'WAIT_DELIVERY',
        description: 'Ожидание доставки',
    },
    {
        code: 'RETURNED_FOR_REWORK_INSTRUCTION_REPORT',
        description: 'Подготовка отчета об исполнении поручения – возвращено на доработку',
    },
    {
        code: 'CLOSED_COPY',
        description: 'Закрыто (Копия)',
    },
    {
        code: 'WAIT_PROLONG_EXPIRED_RESPONSE_RETURNED',
        description: 'Ожидание ответа. Срок нарушен. Срок продлен - Возвращено',
    },
    {
        code: 'WAIT_PROLONGED_EXPIRED_PART_RESPONSE',
        description: 'Ожидание ответа (ответ получен не в полном объеме). Срок нарушен. Срок продлен',
    },
    {
        code: 'EXPIRED_COMPLETED',
        description: 'Исполнено с нарушением срока',
    },
    {
        code: 'AUTHORIZATION',
        description: 'Проверка',
    },
    {
        code: 'ATYPICAL_RETURN_TO_TYPOLOGIZATION_CHECK',
        description: 'Авторизация возврата на проверку типологизации (нетиповое обращение)',
    },
    {
        code: 'SENT_TYPICAL',
        description: 'Ответ отправлен в САДД БР (типовое обращение)',
    },
    {
        code: 'AUTHORIZATION_OUT_OF_COMPETENCE',
        description: 'Ответ на проверке (вне компетенции Банка России)',
    },
    {
        code: 'ATYPICAL_DECISION_ON_COMPETENCE',
        description: 'Принятие решения о компетенции (нетиповое обращение)',
    },
    {
        code: 'RESPONSE_READY_TYPICAL',
        description: 'Ответ подготовлен (типовое обращение)',
    },
    {
        code: 'RETURNED_ENRICHMENT',
        description: 'Возвращено на доработку (обогащение)',
    },
    {
        code: 'RETURNED_ATTACHMENTS',
        description: 'Возвращено на доработку (прикрепление файлов)',
    },
    {
        code: 'RETURNED_CHILD_CREATION',
        description: 'Возвращено на доработку (создание/изменение дочерних обращений)',
    },
    {
        code: 'RESPONSE_PREPARATION_OUT_OF_COMPETENCE',
        description: 'Подготовка ответа (вне компетенции Банка России)',
    },
    {
        code: 'WAIT_EXPIRED_RESPONSE',
        description: 'Ожидание ответа. Срок нарушен',
    },
    {
        code: 'RKPD_NOT_SIGNED',
        description: 'Отказ в подписании',
    },
    {
        code: 'WAIT_RESPONSE',
        description: 'Ожидание ответа',
    },
    {
        code: 'CANCEL_CONTROL_AUTHORIZATION',
        description: 'Авторизация снятия с контроля',
    },
    {
        code: 'SEND_EPVV_ERROR',
        description: 'Ошибка отправки в ЕПВВ',
    },
];
