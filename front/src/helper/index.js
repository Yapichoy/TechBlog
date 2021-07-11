import format from 'date-fns/format'
import rulocale from 'date-fns/locale/ru';

export const dateTimeFormat = (datetime) => datetime && format(new Date(datetime),'dd/MM/yyyy H:m', {addSuffix: true, locale: rulocale})