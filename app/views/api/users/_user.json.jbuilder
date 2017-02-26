json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)

json.set! :videos do
  json.array! user.videos do |video|
    json.id video.id
    json.user_id video.user_id
    json.title video.title
    json.views video.views
    json.thumbnail_url asset_path(video.thumbnail.url)
    json.upload_date video.created_at.to_date
  end
end

json.set! :liked_videos do
  json.array! user.liked_videos.uniq do |video|
    json.id video.id
    json.user_id video.user_id
    json.title video.title
    json.views video.views
    json.thumbnail_url asset_path(video.thumbnail.url)
    json.upload_date video.created_at.to_date
  end
end

json.likes user.likes, :video_id

json.video_count user.videos.length
json.likes_count user.likes.length
