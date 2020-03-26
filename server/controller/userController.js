import routes from "../router/routes";

export const getJoin = (req, res) => {
  res.render("globalPug/join", { pageTitle: "JOIN" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req; //es6
  console.log(req.body);
  if (password !== password2) {
    res.status(400);
    res.render("globalPug/join", { pageTitle: "JOIN" });
  } else {
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("globalPug/login", { pageTitle: "LOG IN" });

export const postLogin = (req, res) => res.redirect(route.home);

export const logout = (req, res) =>
  res.render("globalPug/logout", { pageTitle: "LOGOUT" });

export const userDetail = (req, res) =>
  res.render("userPug/userDetail", { pageTitle: "USERDETAIL" });
export const editProfile = (req, res) =>
  res.render("userPug/editProfile", { pageTitle: "EDITPROFILE" });
export const changePassword = (req, res) =>
  res.render("userpug/changePassword", { pageTitle: "CHANGEPASSWORD" });
