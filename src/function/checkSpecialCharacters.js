export const checkSpecialCharacters = (text) => {
    const specialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharacters.test(text);
}