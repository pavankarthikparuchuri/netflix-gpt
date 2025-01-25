export const checkValidData = (userName, email, password) => {
  const name = /^[0-9A-Za-z]{6,16}$/.test(userName);
  // between 6 and 16 characters, alphanumeric only
  if (!name)
    return "Name Should be between 6 and 16 characters, alphanumeric only";
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  // between 8 and 32 characters, at least one letter and one number
  const isPasswordValid = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{8,32}$/.test(password);
  if (!isEmailValid) return "Email ID is not valid";

  if (!isPasswordValid)
    return "Password should be between 8 and 32 characters, at least one letter and one number";

  return null;
};
