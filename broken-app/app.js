

// curl -X POST -H "Content-Type: application/json" -d '{"developers": ["name", "name"]}' http://localhost:3000/

const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/', async (req, res, next) => {
  try {
    const results = await Promise.all(
      req.body.developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return response.data;
      })
    );

    const out = results.map((data) => ({
      name: data.name,
      bio: data.bio,
    }));

    return res.json(out);
  } catch (err) {
    next(err); 
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// const express = require('express');
// const axios = require('axios');

// const app = express();
// app.use(express.json());

// const GITHUB_API_URL = 'https://api.github.com/users/';

// app.post('/', async (req, res, next) => {
//   try {
//     const developers = req.body.developers;
//     const developerInfoPromises = developers.map(async (login) => {
//       try {
//         const response = await axios.get(`${GITHUB_API_URL}${login}`);
//         const { name, bio } = response.data;
//         console.log(`Fetched data for ${login}: name=${name}, bio=${bio}`);
//         return { name, bio };
//       } catch (apiError) {
//         console.error(`Error fetching data for ${login}:`, apiError);
//         return { name: null, bio: null };
//       }
//     }); 

//     const developerInfo = await Promise.all(developerInfoPromises);
//     console.log('Final developerInfo:', developerInfo);
//     res.json(developerInfo);
//   } catch (error) {
//     next(error);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong' });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// const express = require('express');
// const axios = require('axios');

// const app = express();
// app.use(express.json());

// const GITHUB_API_URL = 'http://localhost:3001/users/'; // Replace with mock server URL

// app.post('/', async (req, res, next) => {
//   try {
//     const developers = req.body.developers;
//     const developerInfoPromises = developers.map(async (username) => {
//       try {
//         const response = await axios.get(`${GITHUB_API_URL}${username}`);
//         const { name, bio } = response.data;
//         console.log(`Fetched data for ${username}: name=${name}, bio=${bio}`);
//         return { name, bio };
//       } catch (apiError) {
//         console.error(`Error fetching data for ${username}:`, apiError);
//         return { name: null, bio: null };
//       }
//     });

//     const developerInfo = await Promise.all(developerInfoPromises);
//     console.log('Final developerInfo:', developerInfo);
//     res.json(developerInfo);
//   } catch (error) {
//     next(error);
//   }
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong' });
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });