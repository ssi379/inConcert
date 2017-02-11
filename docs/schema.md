# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_url      | string    |
admin           | boolean   | not null, default: false

## videos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
views       | integer   | not null, default: 1
video_url   | string    | not null
thumb_url   | string    | not null

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
