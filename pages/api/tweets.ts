// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Tweet } from "../../src/components/global/interfaces";

// a7cd5a92-43fc-4c8e-8ff3-7b39ce774c6f
// b2a6638e-77e6-44e9-9722-4b4cbf5c1041

const tweets: Tweet[] = [
    {
        id: "09c4599d-e3c0-41f3-be92-0c741d58192a",
        name: "Ivan Lara",
        userName: "KalixTheMan",
        avatarUri:
            "https://www.datocms-assets.com/50719/1625642555-2042228321883724831238239178179011583638848n.jpg?auto=format&dpr=0.29&w=1794",
        text: "El primer SUV eléctrico de Renault ya está en España.",
        date: "2020-01-14",
    },
    {
        id: "a7cd5a92-43fc-4c8e-8ff3-7b39ce774c6f",
        name: "Zlatan Ibrahimovic",
        userName: "Ibra_official",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1496109674147500038/aI2j5as8_400x400.jpg",
        text: "You sleep. I work",
        date: "2020-01-15",
    },
    {
        id: "847653e6-b39b-4852-9443-922573972d3c",
        name: "Gladys Baumbach",
        userName: "Gilda_Hettinger2020",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1494432633194958848/soDhYyEa_400x400.jpg",
        text: `
        Vuelve la magia que más nos gusta en Harry Potter 20 Aniversario: Regreso a Hogwarts. 
        
        Solo en HBO Max. ¡Suscríbete ahora!`,
        date: "2020-01-17",
    },
    {
        id: "c8463f92-ff25-4561-8651-53c4b99bd239",
        name: "Mundo Deportivo",
        userName: "mundodeportivo",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1277369340275437570/R-AXlYNT_400x400.png",
        text: "🤾‍♂️ El Barça recibe al Telekom Veszprem en un partido crucial de la lucha por las dos primeras plazas que darán billete directo a cuartos de la Champions",
        date: "2020-01-19",
    },
    {
        id: "b578c541-c1ad-4634-8099-ab2d39bbd554",
        name: "TIME",
        userName: "TIME",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1367496192662331402/7ye6OsYx_400x400.jpg",
        text: "Here’s what we know so far about Russia's military operation in Ukraine",
        date: "2020-01-21",
    },
    {
        id: "2eb12981-4967-4280-a2ef-316f83476e00",
        name: "Camilini",
        userName: "Camilini_",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1486963562870448128/Gk80GeXj_400x400.jpg",
        text: "Llega ese momento tenso de la madrugada en el que me quedo viendo fijamente con sky ferreira",
        date: "2020-01-22",
    },
    {
        id: "58dd3869-a84a-40bd-b679-10fa71cf9715",
        name: "GeraldM 👨🏾‍💻🇳🇮",
        userName: "@GeraldM_92",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1302088726202519553/8U-bJ8Fb_400x400.jpg",
        text: `@bejamas_io release some days ago the #DISCOVERYhub with gold info about the modern-day web tools. That was a big team effort. I had the chance to contribute with two #headlessCMS reviews.
        Check here 🤓:
        
        @strapijs: https://tinyurl.com/strapi-cms @TakeShapeIO: https://tinyurl.com/takeshape`,
        date: "2020-01-22",
    },
    {
        id: "fde87624-434f-45a4-b830-b4883da0d511",
        name: "Netlify",
        userName: "Netlify",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg",
        text: `😎 We’re getting pumped!
        
        Join us live TOMORROW to hear Salma @whitep4nth3r talk about the power of building and deploying Next.js sites with Netlify.`,
        date: "2020-01-23",
    },
    {
        id: "f0c2ea11-45c7-4e9e-81c7-d38cb9016487",
        name: "Netlify",
        userName: "Netlify",
        avatarUri:
            "https://pbs.twimg.com/profile_images/1413544188411482112/61xGHyIi_400x400.jpg",
        text: `We're into the final week of 
        @hashnode
        's Netlify hackathon.
        There's still time to join the fun, and some great prizes on offer!
        
        Get in quick!`,
        date: "2020-01-24",
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Tweet[]>
) {
    return res.status(200).json([...tweets, ...tweets, ...tweets, ...tweets]);
}
