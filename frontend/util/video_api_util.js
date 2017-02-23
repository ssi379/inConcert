export const shuffleVideos = (videos) => {
  let currentIdx = videos.length
  let tempValue;
  let randomIdx;
  while( 0 !== currentIdx){
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -= 1;

    tempValue = videos[currentIdx];
    videos[currentIdx] = videos[randomIdx];
    videos[randomIdx] = tempValue;
  }

  return videos;
}



export const searchVideos = (filter) => {
  return $.ajax({
    method: "GET",
    url: `api/videos/`,
    data: filter
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
