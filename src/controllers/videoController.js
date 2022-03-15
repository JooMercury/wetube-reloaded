const fakeUser = {
  username: "Mercury",
  loggedIn: true,
};

export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", fakeUser: fakeUser });
export const see = (req, res) =>
  res.render("watch", { pageTitle: "Watch Videos" });
export const edit = (req, res) =>
  res.render("Edit", { pageTitle: "Edit Videos" });

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
