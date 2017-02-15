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

Video.destroy_all

# Video.create!({
#     title: "Silversun Pickups - Circadian Rhythm",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/sspickups.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
#
# Video.create!({
#     title: "Yeasayer - I Am Chemistry",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/Yeasayer+new+mix-HD.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
#
# Video.create!({
#     title: "Third Story - Death With Dignity",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/thirdstory.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "The Naked and Famous - Higher",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/tnaf.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Solo Woods - Come Again",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/solowoods.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "You Bred Raptors - Lagoon",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/youbredraptors.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Rubble Bucket - Came Out of a Lady",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/rubblebucket.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "City of the Sun - These Days Are Now",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/cityofthesun_v2-HD.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Zuli - Forget My Name",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/zuli.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Yael Naim - Coward",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/yael.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "LANTRNS - Goldthread",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/LANTRNS_goldthread_video.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Brooklyn Wildlife - Building Blocks",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/NYC+10.12.2016+-+Brooklyn+Wildlife+-+Building+Blocks-HD.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "TK the Architect & The Get Back Kids - Water",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/NYC+4.21.2016+-+TK+the+Architect+%26+The+Get+Back+Kids+-+Water-HD.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Deep Sea Diver - Notice Me",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/deepseadiver_noticeme_video.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Disorder Kid - 365",
#     description: Faker::Hipster.paragraphs,
#     videoitem: 'https://s3.amazonaws.com/inconcert-dev/seed_videos/disorderkid_v1.mp4',
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Dylan Dunlap - From The Ground Up",
#     description: Faker::Hipster.paragraphs,
#     videoitem: 'https://s3.amazonaws.com/inconcert-dev/seed_videos/dylandunlap_fromthegroundup_video.mp4',
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Field Trip - Never",
#     description: Faker::Hipster.paragraphs,
#     videoitem: "https://s3.amazonaws.com/inconcert-dev/seed_videos/fieldtrip_never_video.mp4",
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Future Generations - Stars",
#     description: Faker::Hipster.paragraphs,
#     videoitem: URI.parse("https://s3.amazonaws.com/inconcert-dev/seed_videos/futuregenerations_stars_video.mp4"),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
#
# Video.create!({
#     title: "Shareef Keyes & The Groove - Cheeseburger",
#     description: Faker::Hipster.paragraphs,
#     videoitem: URI.parse("https://s3.amazonaws.com/inconcert-dev/seed_videos/futuregenerations_stars_video.mp4"),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Sean McVerry - Natalie",
#     description: Faker::Hipster.paragraphs,
#     videoitem: URI.parse("https://s3.amazonaws.com/inconcert-dev/seed_videos/futuregenerations_stars_video.mp4"),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Michael Blume - How High",
#     description: Faker::Hipster.paragraphs,
#     videoitem: URI.parse("https://s3.amazonaws.com/inconcert-dev/seed_videos/futuregenerations_stars_video.mp4"),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Harmony House - Doo-Wop",
#     description: Faker::Hipster.paragraphs,
#     videoitem: URI.parse("https://s3.amazonaws.com/inconcert-dev/seed_videos/futuregenerations_stars_video.mp4"),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
# Video.create!({
#     title: "Janelle Kroll - 24 Hours",
#     description: Faker::Hipster.paragraphs,
#     videoitem: File.open(),
#     user_id: users.sample.id,
#     views: rand(100000)
# })
