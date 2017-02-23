json.extract! video, :id, :title, :description, :user_id, :views

json.upload_date video.created_at.to_date
json.thumbnail_url asset_path(video.thumbnail.url)
json.video_url asset_path(video.videoitem.url)
json.seeded video.seeded
json.num_likes video.likes.length



json.user do
  json.partial! './api/users/user', { user: video.user }
end
