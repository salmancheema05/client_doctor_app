const tokenSave = (userObject) => {
  localStorage.setItem("user", JSON.stringify(userObject));
};
export { tokenSave };
