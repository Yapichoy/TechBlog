export default ({isAuth, values, errors}) => {
    const rules = {
      zipcode: (value) => {
        if (!value) {
          errors.zipcode = "Zip code required";
        } else if (!/^[0-9]{5}$/i.test(value)) {
          errors.zipcode = "Invalid zip code";
        }
      },
      password: (value) => {
        if (!isAuth) {
          if (!value) {
            errors.password = "Required";
          } else if (!/^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/.test(value)) {
            errors.password =  "Слишком лёгкий пароль";
          }
        }
      }
    }
    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key])
    );
  };