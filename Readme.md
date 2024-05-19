# Rick and Morty Wiki

-This project a webpage made fot Rick and Morty fans, the main function is provide information abut the lore of this famous animated show.

-It was developed to work  with the Rick and Morty API, which provides an extensive library whith all the characters, locations and episodes.

## Features

### Frontend

- It was created using React and functioonal components.
- the desing was made with CSS without external libraries. Is a responsive webpage so it can be opened in any mobile device or screen size.
- To avoid unnecesary calls to the api a Redux Store wass created to provide favorites, searchdata and filters.

### Backend

- Created with NodeJS.
- The routes were created using express.
- Uses a PostgreSQL database to store users accounts and favorites.
- The connection to the database and creation of models was developed with Sequelize.
- It uses jsonwebtoken to provide secure access to the database, server and frontend communication.
- It provides a feature to upload profile pictures using multer.
- Testing made use supertest and jest.






