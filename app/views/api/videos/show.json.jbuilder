json.partial! './api/videos/video', { video: @video }

json.set! :comments do

  json.array! @video.comments.sort do |comment|
    json.id comment.id
    json.body comment.body
    json.video_id comment.commentable_id
    json.user_id comment.user_id
    json.comment_date comment.created_at.to_time

    json.set! :author do
      json.partial! './api/users/user', { user: comment.user }
    end

    json.set! :replies do
      json.array! comment.comments.sort do |reply|
        json.id comment.id
        json.body comment.body
        json.comment_id comment.commentable_id
        json.user_id comment.user_id
        json.comment_date comment.created_at.to_time

        json.set! :author do
          json.partial! './api/users/user', { user: comment.user }
        end

      end

    end
  end
end

json.set! :likes do
  json.array! @video.likes do |like|
    json.id like.id
    json.user_id like.user_id
    json.video_id like.video_id
  end
end

if(current_user)
  json.liked_by_current_user current_user.likes.include?(Like.find_by(video_id: @video.id))
end
