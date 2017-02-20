json.partial! './api/videos/video', { video: @video }

json.set! comments do
  json.array! @video.comments do |comment|
    json.partial! './api/comments/comment', { comment: comment }
  end
end
