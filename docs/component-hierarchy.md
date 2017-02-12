## Component Hierarchy

**SessionFormContainer**
  - SessionForm

**HeaderContainer**
  - Header
    + Searchbar
      - SearchbarForm
    + User profile dropdown
  - AppBar

**HomeIndexContainer**
  - Home
    + HomeIndex

**SearchContainer**
  - SearchBar
    + SearchBarResult
  - SearchResults

**VideoUploadContainer**
  - VideoUpload
    + FileUpload
    + UploadForm

**VideoShowContainer**
  - VideoPlayer
  - VideoDetail
    + Likes
    + Add to Playlist (bonus)
  - VerticalFeed
  - Comments

## Bonus Features
**UserProfileContainer**
  - UserVideos
  - UserVideoLikes
  - UserPlaylists

**VideoPlaylistContainer**
  - VideoPlaylist
  - UpNext



## Routes
| Path | Component |
|------|-----------|
| `/`        | `HomeContainer`        |
| `/sign-up` | `SessionFormContainer` |
| `/sign-in` | `SessionFormContainer` |
| `/results` | `SearchContainer`      |
| `/upload` | `VideoUploadContainer`  |
| `/video/:videoId` | `VideoShowContainer` |
| `/user/:userId` | `UserHomeContainer` (bonus) |
