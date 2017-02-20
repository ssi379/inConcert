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

export const createVideo = (formData) => {
  return $.ajax({
    method: "POST",
    url: `api/videos`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
}

export const updateVideo = (videoId) => {

  return $.ajax({
    method: "PATCH",
    url: `api/videos/${videoId}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  })
}
export const deleteVideo = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/videos/${id}`
  })
}
