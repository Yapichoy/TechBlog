export default  (key, touched, errors) => {
    if (touched[key] && errors[key]) {
        return 'error';
    } else if(!touched[key]) {
        return '';
    } else {
        return 'success';
    }
}