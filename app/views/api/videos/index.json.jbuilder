json.listed_videos @videos.each do |video|
  json.partial! './api/videos/video', { video: @video }
end
