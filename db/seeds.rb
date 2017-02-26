users = [8, 9, 10, 11, 12, 13, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

CommentsList = [
  "nice video!",
  "Great shots. I really liked the wide.",
  "Come back to Austin!",
  "Please play for us in Winnipeg again.",
  "what kind of mic is that? I need one of those.",
  "I want a tattoo of this video.",
  "hi, I like music. check out my profile to see my favorite acts this year",
  "saw them back in 2011. Glad to see they're still touring!",
  "see you guys at the merch table!",
  "good performance, I saw them in philly too",
  "i think i'm in the audience!",
  "headphones recommended",
  "I like music. You like music?",
  "ok, but when is your next ep coming out?",
  "met them at a festival and they were great down to earth people",
  "Punk rock no stop brothers and sisters",
  "sleeper hit in this generation",
  "Most kids in my school just listen to pop music, but I like underground stuff like this!",
  "I disagree, this is a great aesthetic",
  "I wish I was there",
  "keep these videos coming. such a great concept!",
  "I want to like this video 1000x",
  "This is awesomesauce",
  "Ehhh, I don't wanna come off as a hater but idk about this music man",
  "Just feel the music.",
  "this reminds me of what I listened to in high school. trust me, that's not a bad thing.",
  "Nostalgic sound!!",
  "More cowbell?? Ahh just kidding",
  "Very inspiring performance!",
  "ooo the lighting is very nice",
  "bookmarked in seconds.",
  "New jam :D",
  "they played their hearts out, so good",
  "great energy!!",
  "why have I never seen this before??",
  "Powerful, cannot stop listening",
  "I want these lads to perform in Cork!!",
  "I'm getting chills from this one.",
  "more than a year and this is still my absolute favorite!",
  "'Wow', was what I was thinking",
  "I found the sound of gods.",
  "Wow, what incredible energy.",
  "Je rêve de les voir en France !!!﻿",
  "thank you inConcert for helping me find another great band",
  "nice and smooth vibe",
  "wonderful work",
  "Very classy! Top band.",
  "There are so many underrated performances on this website.",
  "I'm crying. My heart is flipping out. I love this!!",
  "This writing and performance is inspiring!  I enjoyed it much, thanks!﻿",
  "I'm not sure that how many times I listen this song and I repeat every single word :)",
  "this was just awesome",
  "this was fire woooo!",
  "soooo goood, really amazing performance, thanks as always for sharing.﻿",
  "It was a pleasure to hear that nice voice with beautiful atmosphere.﻿",
  "Loved this new song! so much fun﻿",
  "Ha this is amazing!﻿",
  "Well I have a new favorite band",
  "Wow....jaw dropped what a performance. The singer is amazing love their vibes﻿",
  "amazing footage!!",
  "yes, please",
  "I MISS THIS CONCERT",
  "nice!",
  "oh my!",
  "Glad I tuned in.",
  "Can't stop replaying.",
  "clean refreshing musical sound!",
  "I can't get enough of this track!"
]

125.times do
  Comment.create!({
    body: CommentsList.sample,
    user_id: users.sample,
    video_id: Video.where(seeded: true).sample.id
  })
end

125.times do
  Like.create!({
    user_id: users.sample,
    video_id: Video.where(seeded: true).sample.id
  })

Video.all.each do |video|
  title_array = video.title.split("-")
  video.description = "#{title_array[1][1..-1]} performed by #{title_array[0][0...-1]}"
  video.save!
end
