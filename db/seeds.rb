users = [8, 9, 10, 11, 12, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

125.times do
  Comment.create!({
    body: Faker::Hacker.say_something_smart,
    user_id: users.sample,
    video_id: Video.where(seeded: true).sample.id
  })
end

125.times do
  Like.create!({
    user_id: users.sample,
    video_id: Video.where(seeded: true).sample.id
  })
