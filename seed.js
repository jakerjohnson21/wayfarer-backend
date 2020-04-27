require('dotenv').config();
const mongoose = require('mongoose');
const db = require('./models');


const cities = [
    {
        name: 'San Francisco',
        picture: 'https://cdn.shopify.com/s/files/1/0011/6208/4407/products/Art_2904_2000x.jpg?v=1566391827'
    },
    {
        name: 'Seattle',
        picture: 'https://i.ytimg.com/vi/yfp4T0fpTUM/maxresdefault.jpg'
    },
    {
        name: 'San Diego',
        picture: 'https://coronadotimes.com/wp-content/uploads/2012/10/2239-340093_10150553487800862_521280306_o.jpg'
    },
    {
        name: 'New York',
        picture: 'https://www.tripsavvy.com/thmb/4Swfscl2UAWR1B_8WyE_LH14pKA=/2120x1414/filters:fill(auto,1)/GettyImages-938174878-534efd6cc28e45e78fae6a841c1e0aaf.jpg'
    },
    {
        name: 'Chicago',
        picture: 'https://live.staticflickr.com/4515/26813415829_ce974e06c9_b.jpg'
    }
]

const user = {
    name: 'Jake',
    email: 'jake@gmail.com',
    password: '12345',
    currentCity: 'San Diego'
}

const posts = [
    {
        title: 'San Diego sucks',
        author: "5ea37a5a7207c1cf4f10a89c",
        city: '',
        content: 'stuff stuff sstuffsf sfdsijnvapdokg vjepgviojqepfv iqehv peqjnv pqeuv npeq iuverpu'
    },
    {
        title: 'San Francisco is kinda cool',
        author: "5ea37a5a7207c1cf4f10a89c",
        city: '',
        content: 'Stuff Stuff stuff'
    },
    {
        title: 'San Fran is poop',
        author: "5ea37a5a7207c1cf4f10a89c",
        city: '',
        content: 'I am actually great with old women. In fact, for the longest time my best friend was my grandmother. And then she met Harriet. And now she thinks she better than everybody.'
    },
    {
        title: 'Seattle is rainy',
        author: "5ea37a5a7207c1cf4f10a89c",
        city: '',
        content: "Business to business. The old fashion way. No blackberries. No websites. I would like to see a website deliver baskets of food to people."
    },
]


db.City.create(cities, (err, newCities) => {
    if (err) {
        console.log(err)
        process.exit();
    }

    console.log(`Successfully created ${newCities.length} cities`);
})

db.User.create(user, (err, newUser) => {
    if (err) {
        console.log(err)
        process.exit();
    }

    console.log(`Successfully created ${newUser}`);
})
