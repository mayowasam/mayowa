import spotify from '../assets/spotify.png'
import spotifysmall from '../assets/spotifysmall.png'
import friendsmall from '../assets/friendsmall.png'
import friends from '../assets/friends.png'
import tourist from '../assets/tourist.jpeg'
import map2 from '../assets/map2.png'
import old from '../assets/old.png'
import social from '../assets/social.png'
import errand from '../assets/errand4.png'
import errand1 from '../assets/errand3.png'
import note1 from '../assets/note3.png'
import note2 from '../assets/note7.png'


export const data = [
    {
        id: 1,
        name: "spotify",
        bigImage: spotify,
        smallImage: spotifysmall,
        githubLink: "https://github.com/mayowasam/Spotify",
        siteLink: "https://mayowaspotify.herokuapp.com/",
        description: "A fully built Spotify clone which allows you to play music, search for music and also get your personalized data such as top artists, tracks, recommendations and more.",
        built: ["React", "NodeJs", "Express", "Spotify API", "Styled-Components"]

    },
    {
        id: 2,
        name: "friends",
        bigImage: friendsmall,
        smallImage: friends,
        githubLink: "https://github.com/mayowasam/Chat",
        siteLink: "https://friendsocket.herokuapp.com/",
        description: "A chat app, which helps you to communicate with friends. Send instant messages, get notifications, use emojis and display online users and get previous chats with users and many more..",
        built: ["React", "NodeJs", "Socket.io", "Express", "MongoDB", "Rest API", "Styled-Components"]

    },
    {
        id: 3,
        name: "Connect",
        bigImage: social,
        smallImage: social,
        githubLink: "https://github.com/mayowasam/devsocial",
        siteLink: "https://devssocialapp.herokuapp.com/",
        description: "A web app for developers to connect and network, create a portfolio, create a post, like and comment on post ",
        built: ["React", "NodeJs", "MongoDB", "Express", "Redux", "Github API"]

    },
    {
        id: 4,
        name: "Notes",
        bigImage: note1,
        smallImage: note2,
        githubLink: "https://github.com/mayowasam/Note-App",
        siteLink: "https://mayowatodo.herokuapp.com/",
        description: "A todo app, built with ApolloClient and ApolloServer, with a user's profile, filters for completed task, pending tasks",
        built: ["React", "NodeJs", "GraphQL", "Express", "MongoDB", "Redux Toolkit"]

    },
    {
        id: 5,
        name: "Tourist App",
        bigImage: tourist,
        smallImage: map2,
        githubLink: "https://github.com/mayowasam/Attraction",
        siteLink: "https://attraction-peach.vercel.app",
        description: "An app which shows you the places around you, get to know the restaurants, hotels, tourist attraction sites and the weather around you, with the ability to filter the hotels, restaurants and attraction sites based on ratings.",
        built: ["React", "Styled-Components", "Travel Advisor API", "Google Map API", "Google AutoComplete", "OpenWeather API", "Rapid API"]

    },
    {
        id: 6,
        name: "IbErrands",
        bigImage: errand1,
        smallImage: errand,
        githubLink: "",
        siteLink: "http://www.iberrands.com/",
        description: "An errand hailing app, to help you pay for services to do your chores, with a fully implemented chat and payment system",
        built: ["React", "Sass", "Paystack API", "Flutterwave API"]

    },

    {
        id: 7,
        name: "Mayowa's Website",
        bigImage: old,
        smallImage: old,
        githubLink: "https://github.com/mayowasam/web",
        siteLink: "https://mayowasam.github.io/web/#",
        description: "My previous responsive portfolio website, with dark and light mode effects",
        built: ["React", "styled-components"]

    }

]