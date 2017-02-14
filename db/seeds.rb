User.destroy_all
users = []

users.push(User.create!({
  username: "Demo",
  password: "football",
}))

users.first.avatar.url = "https://s3.amazonaws.com/inconcert-dev/avatars/demo-avatar.png"
