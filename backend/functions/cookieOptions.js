const cookieOption = {
  httpOnly: true,
  expires: new Date(Date.now() + 3600000),
  SameSite: "Strict",
  path: "/"
};

export default cookieOption;
