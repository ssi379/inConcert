export const fetchVideos = () => {
  return $.ajax({
    method: "GET",
    url: "api/videos"
  })
}

export const fetchVideo = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/videos/${id}`
  })
}

export const createVideo = (video) => {
  return $.ajax({
    method: "POST",
    url: `api/videos`,
    data: { video }
  })
}

export const updateVideo = (video) => {
  return $.ajax({
    method: "PATCH",
    url: `api/videos/${video.id}`,
    data: { video }
  })
}
export const deleteVideo = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/videos/${id}`
  })
}
