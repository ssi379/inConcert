User.destroy_all
users = []

users.push(User.create!({
  username: "Demo",
  password: "football",
}))


users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_7.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_14.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_15.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_17.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_19.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_20.jpeg")
}))
users.push(User.create!({
  username: Faker::Superhero.name,
  password: Faker::Hipster.words(2).join(""),
  avatar: File.open("../outer_images/avatar_21.jpeg")
}))
