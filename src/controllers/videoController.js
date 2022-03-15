export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 10,
      createdAt: "2 hours ago ",
      views: 100,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 3,
      comments: 5,
      createdAt: "25 minutes ago ",
      views: 20,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 4,
      comments: 8,
      createdAt: "2 minutes ago ",
      views: 80,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
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
