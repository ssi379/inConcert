 # inConcert

Heroku Link: [inConcert]
Trello Link: [trelloBoard](https://trello.com/b/4SNQRXjd/inconcert)

[inConcert]: #;

## Minimum Viable Product

inConcert is a web application inspired by Vimeo built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at the minimum, satisfy the following criteria.

### Major Features
- [ ] Hosting on Heroku
- [ ] New account creation, login, and demo login
- [ ] Videos
  * Users should also have the ability to upload videos
  * Splash page with global video index
    - [ ] "Staff" Picks
    - [ ] Most Watched (views),
    - [ ] Most Popular (likes),
    - [ ] Sideways scrolling on each video list on the splash
- [ ] Comments
  * Users should have the ability to comment on videos
- [ ] Likes
  * Users should be able to like a Video
- [ ] Video Searching
  * Users should be able to search videos by title
- [ ] Production README
- [ ] Adequate styling constructive to the user's experience.
- [ ] Smooth, bug-free navigation
- [ ] Adequate and appropriate seeds to demonstrate features


### Bonus Features
- [ ] Stylized video player components
- [ ] User created playlists
- [ ] User Show Page
    - [ ] User's uploaded videos
    - [ ] User's likes
    - [ ] User's playlists
    - [ ] Recommended
- [ ] Nested Comments (Can reply to comments)
- [ ] Option to assign categories to videos
- [ ] Assign video production credits to other users
- [ ] Responsive layout



## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 0: Setup

- [X] Initialize git repository
- [X] Install figaro, paperclip video gems
- [X] Install videojs package
- [X] Get up and running with Amazon Web Services

### Phase 1: Backend Setup and Front End User Authentication (1 Day)

**Objective:** Functioning user authentication

- [X] New Rails Project
- [X] User model/migration
- [X] Back end Authentication
- [X] 'StaticPages' Controller and Root View
- [X] 'Webpack' and react/redux modules
- [X] APIUtil setup to interact with the backend API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [ ] User Seed

### Phase 2: Video Model, API, and Components (3 Days)
**Objective:** Video can be created and updated through the API and by Users

- [ ] Video Model
- [ ] Seed database with video data.
- [ ] CRUD API for videos
- [ ] JBuilder views to format videos appropriately
- Video components and respective Redux loops
  - [ ] 'Video Index'
    - Main splash page with videos listed.
  - [ ] 'Video Index Row'
    - Row of videos with Sideways Scrolling
  - [ ] 'Video Form'
    - Video upload form.
      - Upload spinner
      - With drag & drop!
    - Video edit form
  - [ ] 'Video Show Page'
    - Watch a Video
    - View count updates for each render

### Phase 3: Comment Model, API, and Components (2 Days)
**Objective:** Comments can be created and updated through the API and by Users. These comments are owned by a User and by a Video.

- [ ] Comment Model
- [ ] Seed database with Comments
- [ ] CRUD API for comments
- [ ] JBuilder views to format the comment data appropriately
- Comment components and respective Redux loops
  - [ ] 'Comment Index' Per video
    - Lists on the Video show page
    - Ordered by date authored, descending.
  - [ ] 'Comment Item'
    - Individual comments displayed
  - [ ] 'Comment Form'
    - Add a comment to the video

### Phase 4: Likes Model, API, and Components (1 Day)
**Objective:** Users should be able to "Like" a video.

- [ ] Likes Model
- [ ] Seed database with Likes
- [ ] CRD API for Likes
- [ ] Jbuilder views to format the likes data
- Likes components and respective Redux loops
  - [ ] 'Video Likes'

### Phase 5: Video Searching (2 Days)
**Objective:** Video can be searched by title via the search bar.

- [ ] Video search bar component
  - [ ] Search suggestion item components
- [ ] JBuilder views to format videos appropriately
- [ ] Video search result page
  - Video
    - Title
    - Username
    - Description
    - View Count
    - Date posted
  - [ ] Paginate videos for every 12 links

### Bonus Phase 1: User Profile Page
**Objective:** Add user profile page displaying their uploaded videos, liked videos and playlists.

- [ ] User show page with up to 10 most recently uploaded videos and about me description
- [ ] Edit user profile info
- [ ] Give users an data upload quota
- [ ] Page displaying user's liked videos

### Bonus Phase 2: Playlists
**Objective:** Allow users to create playlists and add videos to it

- [ ] Playlists model
- [ ] Playlist Videos join model
- [ ] CRUD API for Playlists
- [ ] Jbuilder views to format the playlist data
- [ ] Playlist show page
  - Up Next list
  - Autoplay next video option with toggle
- [ ] Integrate playlist section into user's profile

### Bonus Phase ∞
- [ ] Nested comments
- [ ] Uploader can give videos categories
  - [ ] Search for videos by category
- [ ] Uploader can tag other users as collaborators (credits)
  - [ ] Video credits show up in user's profile
- [ ] Watch Later
- [ ] Personalized feed
  - [ ] User follows
