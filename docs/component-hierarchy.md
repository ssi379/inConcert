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

**VideoFormContainer**
  - VideoForm
    + FileUpload
    + VideoInfoForm
    + UploadQuotaBar

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
| `/video/new` |   `VideoFormContainer`  |
| `/video/:videoId/edit` | `VideoFormContainer`|
| `/video/:videoId` | `VideoShowContainer` |
| `/user/:userId` | `UserHomeContainer` (bonus) |
