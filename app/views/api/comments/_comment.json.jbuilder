json.extract! comment, :id, :commentable_id, :commentable_type, :user_id, :body, :created_at

json.set! :replies do

  json.array! comment.comments.sort do |reply|
    json.id reply.id
    json.body reply.body
    json.comment_id reply.commentable_id
    json.user_id reply.user_id
    json.comment_date reply.created_at.to_time

    json.set! :author do
      json.partial! './api/users/user', { user: reply.user }
    end

  end
end

json.author do
  json.partial! './api/users/user', { user: comment.user }
end
