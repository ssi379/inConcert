## Component Hierarchy

**SessionFormContainer**
  - SessionForm
    -Log In/Sign Up Errors

**NavBarContainer**
  - NavBar
    + Searchbar
      - SearchbarForm
    + User Icon
      - User dropdown menu

**HomeIndexContainer**
  - Home
    + HomeIndex
      - HomeVideoItem

**SearchContainer**
  - SearchResults
    - SearchResultItem

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
  - UserDetail
  - UserVideos
  - UserVideoLikes
  - UserPlaylists

**VideoPlaylistContainer**
  - VideoPlaylist
  - UpNext



## Routes
| Path | Component |
|------|-----------|
| `/`        | `HomeIndexContainer`        |
| `/sign-up` | `SessionFormContainer` |
| `/sign-in` | `SessionFormContainer` |
| `/results` | `SearchContainer`      |
| `/upload` | `VideoUploadContainer`  |
| `/video/:videoId` | `VideoShowContainer` |
| `/user/:userId` | `UserHomeContainer` (bonus) |
