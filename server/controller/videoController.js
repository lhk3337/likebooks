import { videos } from "../db";
import routes from "../router/routes";
export const home = (req, res) =>
  res.render("globalPug/home", { pageTitle: "HOME", videos });
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  console.log(searchingBy);
  res.render("globalPug/search", { pageTitle: "SEARCH", searchingBy, videos });
};
export const getUpload = (req, res) =>
  res.render("videoPug/upload", { pageTitle: "UPLOAD" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(344392));
};

export const videoDetail = (req, res) =>
  res.render("videoPug/videoDetail", { pageTitle: "VIDEODETAIL" });
export const editVideo = (req, res) =>
  res.render("videoPug/editVideo", { pageTitle: "EDITVIDEO" });
export const deleteVideo = (req, res) =>
  res.render("videoPug/deleteVideo", { pageTitle: "DELETEVIDEO" });
