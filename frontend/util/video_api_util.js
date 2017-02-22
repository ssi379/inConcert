export const searchVideos = (filter) => {
  return $.ajax({
    method: "GET",
    url: `api/videos/${filter}`
  })
}

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

export const processVideoForm = (formData, id = "") => {
  let url;
  let method;

  if(id === ""){
    url = "api/videos";
    method = "POST"
  } else {
    url = `api/videos/${id}`
    method = "PATCH"
  }
  return $.ajax({
    method,
    url,
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
