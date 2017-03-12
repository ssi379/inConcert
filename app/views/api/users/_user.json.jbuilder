json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)
json.nav_avatar_url asset_path(user.avatar(:nav))
json.item_avatar_url asset_path(user.avatar(:video_item))
json.comment_avatar_url asset_path(user.avatar(:comment))

json.set! :videos do
  json.array! user.videos do |video|
    json.id video.id
    json.user_id video.user_id
    json.title video.title
    json.views video.views
    json.thumbnail_url asset_path(video.thumbnail.url)
    json.user_show_thumbnail_url  asset_path(video.thumbnail(:user_show))
    json.user_detail_thumbnail_url  asset_path(video.thumbnail(:user_detail))
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
    json.user_detail_thumbnail_url  asset_path(video.thumbnail(:user_detail))
    json.upload_date video.created_at.to_date
  end
end

json.likes user.likes, :video_id

json.video_count user.videos.length
json.likes_count user.likes.uniq.length
