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
      - VideoListItem

**SearchContainer**
  - SearchResults
    - VideoIndexItem

**VideoFormContainer**
  - VideoForm
    + FileUpload
    + VideoInfoForm
    + UploadQuotaBar(bonus)

**VideoShowContainer**
  - VideoPlayer
  - VideoDetail
    + Likes
    + Add to Playlist (bonus)
  - VerticalFeed
  - Comments
    + CommentIndex
    + CommentItem
    + CommentForm

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
| `/user/:userId` | `UserProfileContainer` (bonus) |
