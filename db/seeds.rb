User.destroy_all
users = []

users.push(User.create!({
  username: "Demo",
  password: "football",
}))

users.push(User.create!({
  username: "test",
  password: "seedwork",
  avatar: File.open("app/assets/images/avatar_0.jpg")
}))
