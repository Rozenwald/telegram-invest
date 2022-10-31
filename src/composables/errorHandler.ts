
export function errorHandler(type: string, field: string) {

  const phoneRegexp = /\D/g
  const emailRegexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
  let error = ''
  switch (type) {
    case 'email':
      if (field == '') {
        return error = 'Обязательное поле'
      }
      if (emailRegexp.test(field) == false) {
        return error = 'Неккоректный email'
      }
      return error = '';
      break;

    case 'code':
      if (field == '') {
        return error = 'Обязательное поле'
      }
      break;

    case 'phone':
      if (field == '') {
        return error='Обязательное поле'
      }
      if (field.length < 10) {
        return error='Номер не может быть меньше 10 цифр'
      }
      if (field.length > 10) {
        return error = 'Номер не может быть больше 10 цифр'
      }
      if (field.match(phoneRegexp) !== null) {
        return error = 'Номер содержит неккоректные символы'
      }
      return error = '';
      break;

    case 'password':
      if (field == '') {
        return error = 'Обязательное поле'

      }
      if (field.length < 6) {
        return error = 'Пароль не может быть меньше 6 символов'

      }
      return error = '';
      break;
    default:
      return error;
      break;
  }
}