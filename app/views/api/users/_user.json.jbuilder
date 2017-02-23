json.extract! user, :id, :username
json.avatar_url asset_path(user.avatar.url)



json.videos user.videos, :user_id, :title, :id
json.likes user.likes, :video_id

json.video_count user.videos.length
json.likes_count user.likes.length
