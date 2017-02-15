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

Video.create!({
    title: "Silversun Pickups - Circadian Rhythm",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/sspickups.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Silversun Pickups - Circadian Rhythm",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/sspickups.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Yeasayer - I Am Chemistry",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/Yeasayer new mix-HD.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Silversun Pickups - Circadian Rhythm",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/sspickups.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Third Story - Death With Dignity",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/thirdstory.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "The Naked and Famous - Higher",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/tnaf.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Solo Woods - Come Again",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/solowoods.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "You Bred Raptors - Lagoon",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/youbredraptors.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Rubble Bucket - Came Out of a Lady",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/rubblebucket.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "City of the Sun - These Days Are Now",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/cityofthesun_v2-HD.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Zuli - Forget My Name",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/zuli.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
Video.create!({
    title: "Yael Naim - Coward",
    description: Faker::Hipster.paragraphs,
    videoitem: File.open("../720p/yael.mp4"),
    user_id: users.sample.id,
    views: rand(100000)
})
