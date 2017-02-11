# HTML API
**Root**
- `GET /` - loads React Web App

# JSON API
**Users**
- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`
  - Access a user's profile page (show bio, videos, likes)

**Session**
- `POST /api/session`
- `DELETE /api/session`

**Videos**
- `POST /api/videos`
- `GET /api/videos`
  - Videos index/search
  - accepts query params to list videos
- `GET /api/videos/:id`
- `PATCH /api/videos/:id`
- `DELETE /api/videos/:id`

**Comments**
- `GET /api/videos/:video_id/comments`
  - Comments index for specific video
- `POST /api/videos/:video_id/comments`
- `PATCH /api/comments/:id`
- `DELETE /api/comments/:id`

**Likes**
- `POST /api/videos/:video_id/likes`
  - Add like for specific video
- `DELETE /api/videos/:video_id/likes`
  - Unlike a specific video

**Playlists (bonus)**

- `GET /api/users/:user_id/playlists`
  - Access a user's playlists
- `POST /api/playlists`
  - User creates new playlist
- `GET /api/users/:user_id/playlists/:playlist_id`
  - Access a particular playlist
- `DELETE /api/playlists/:playlistId`
  - User deletes their own playlist
- `PATCH /api/playlists/:playlistId`
  - User edits their own playlist
