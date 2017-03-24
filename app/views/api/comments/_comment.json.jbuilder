json.extract! comment, :id, :commentable_id, :commentable_type, :user_id, :body, :created_at

json.author do
  json.partial! './api/users/user', { user: comment.user }
end
