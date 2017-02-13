# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

+ avatar attachment via paperclip (image)

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
views       | integer   | not null, default: 1

+ video & thumbnail attachment via paperclip

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
video_id    | integer   | not null, foreign key (references videos), indexed
body        | text      | not null

## likes
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
user_id       | integer   | not null, foreign key (references users), indexed
video_id      | integer   | not null, foreign key (references videos), indexed

## playlists(bonus)
column name     | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
playlist_title  | integer	  | not null
description     | integer	  | not null

## playlist_videos(bonus)
column name     | data type |	 details
----------------|-----------|---------------------------
id	            | integer	  | not null, primary key
playlist_id     | integer	  | not null, foreign_key (references playlists), indexed
mv_id           | integer	  | not null, foreign_key (references music_videos), indexed
