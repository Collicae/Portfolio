//Imports for the Icons
import { FaHtml5 } from "react-icons/fa"; //HTML
import { FaCss3 } from "react-icons/fa"; //CSS
import { IoLogoJavascript } from "react-icons/io5"; //JavaScript
import { FaPython } from "react-icons/fa"; //Python
import { FaReact } from "react-icons/fa"; //React.js
import { TbBrandReactNative } from "react-icons/tb"; //React Native
import { SiDjango } from "react-icons/si"; //Django
import { TbSql } from "react-icons/tb"; //SQL
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si"; //MongoDB




export const colorShifts = [
    {image: '/3B5B6920-D4CD-424C-8F30-B7FB213A1670_4_5005_c.jpeg', text: 'From Graduating Ivy Tech...', color: '#0a0a19'},
    {image: '/3E2427FB-BD77-437F-B974-9DCF2415CC09_4_5005_c.jpeg', text: 'Walking the Stage...', color: '#503278'},
    {image: '/1699DE32-FE64-4C15-B6A1-EC2111DF0A3F_4_5005_c.jpeg', text: 'To Touring Purdue...', color: '#14505a'},
    {image: '/DF4088A1-B9F0-4773-A686-738BB7340E43_4_5005_c.jpeg', text: 'My family has always been by my side...', color: '#e6e6ff'},
    {image: '/E84F6649-82A9-46A8-9A78-4D0661433065_4_5005_c.jpeg', text: 'To get me where I am today!', color: '#4682ff'},
  ]

export const aboutNav = [
    {page: 'About', back: '#E6E6FA', href: '/about'},
    {page: 'Projects (C)', back: '#B0E0E6', href: '/projects-completed'},
    {page: 'Plans', back: '#BDFCC9', href: '/#'},
  ]
  
  export const skillSet = [
    {icon: FaHtml5, name: 'HTML', color: '#E34F26'},
    {icon: FaCss3, name: 'CSS', color: '#1572B6'},
    {icon: IoLogoJavascript, name: 'JavaScript', color: '#F7DF1E'},
    {icon: FaPython, name: 'Python', color: '#3776AB'},
    {icon: FaReact, name: 'React.js', color: '#61DAFB'},
    {icon: TbBrandReactNative, name: 'React Native', color: '#61DAFB'},
    {icon: SiDjango, name: 'Django', color: '#092E20'},
    {icon: TbSql, name: 'SQL', color: '#00758F'},
    {icon: SiMongodb, name: 'MongoDB', color: '#47A248'},
    {icon: SiPostgresql, name: 'PostgreSQL', color: '#336791'},
  ]
  
  export const skillProgression = [
    {name: 'HTML', usage: '70', experience: '80', knowledge: '50'}, //HTML
    {name: 'CSS', usage: '80', experience: '80', knowledge: '55'}, //CSS
    {name: 'JavaScript', usage: '60', experience: '40', knowledge: '37'}, //JavaScript
    {name: 'Python', usage: '45', experience: '34', knowledge: '45'}, //Python
    {name: 'React js', usage: '60', experience: '40', knowledge: '50'}, //React js
    {name: 'React Native', usage: '38', experience: '30', knowledge: '20'}, //React Native
    {name: 'Django', usage: '20', experience: '32', knowledge: '49'}, //Django
    {name: 'SQL', usage: '20', experience: '30', knowledge: '55'}, //SQL
    {name: 'MongoDB', usage: '30', experience: '30', knowledge: '23'}, //MongoDB
    {name: 'Postgress', usage: '20', experience: '20', knowledge: '25'}, //Postgress
  ]
  
  
  export const skillDescription = [
    {name: 'HTML', text: 
        "(Starter Language) \nHTML was the first language I ever started with. When I get started with a project, the HTML portion doesn't take too long for me to finish.\n -Made a few school projects with HTML though they were very basic in terms of designs\n -Mainly use this languge with React but never by itself with CSS and JavaScript"},
         //HTML
    {name: 'CSS', text:
         "(Starter Language) \nPairing with HTML, CSS was the second language I was introduced to in high School. Use either its vanilla programming or a framework to customize most my projects.\n -Used it for school projects\n -Side projects that it didn't finsh\n -Utilized in the creation of Blus Homemade Website\n -Utilized Tailwind CSS for the creation of some School Projects, Portfolio, and Applications"}, 
         //CSS
    {name: 'JavaScript', text: 
        "(Starter Language) \nOnce Learning the basics were over in high school I was swiftly introduced to JavaScript for the functionality for websites and apps. I use bits of JavaScript where I can in projects, with some resulting in more usage of the language to some projects where I won't use it in a lot of their development, though i still see the necessity for the language.\n -Utilized somewhat in the development of Blus Homemade Website\n -Used heavly in School Projects\n -Used somewhat in other projects outside of high school "}, 
        //JavaScript
    {name: 'Python', text: 
        "(Starter Language) \nHard for me to place Python in terms of skills. I use the language every now and then but don't prioritize it since I work with other languages/Frameworks more. Used more when dealing with backend with most of the projects now not having any backend or have a backend that I didn't work on (group project with me working on the front-end).\n -Used in Blus Homemade Website with Django\n -Breifly used in development for the mobile app with MongoDB but at the time i'm not done with it yet"}, 
        //Python
    {name: 'React js', text: 
        "The first language I learned outside of high school! Wanted to learn something new so forced myself to learn the language/framework. Although learned outside of school it took me at least a year to get comfortable with using it, Blus Homemade was the first website I used with it (hence why it looks bland), I do have future plans to update the site though, But after completing other things first. Still getting better with it\n -Used in the creation of Blus Homemade Website\n -Used to make this Portfolio\n -Mainly used language/framework "},
         //React js
    {name: 'React Native', text:
         "The second language I learned, I planned to learn this one first but was told it was harder to start with thus why I started with React.js. Got started learning this language shortly after finishing the Blus Homemade Website, so i'm still learning it at this time. Enjoying the language so far and plan to use it more on application development.\n -Used on my current app project\n -Planed to be my main app language to target both IOS and Android devices"}, 
         //React Native
    {name: 'Django', text: 
        "Not really sure how I started working with Django, before working on the Blus Homemade Website I was deciding betweeen Django or Flask. I just chose Django becuase it was in more demand and becuase I wanted a challenge when making the site. In terms of what I know from it I know what each of the files do, make models, views, and routes, as well as delving into a little bit of authentications and cookies but will still need to work more on it for future projects.\n -Used in Blus Homemade Website\n -Briefly worked with authentications and sessions"},
         //Django
    {name: 'SQL', text: 
        "Although I learned this language in high school I don't really use it outside on projects. When Working on the Blus Homemade Website I used Sqlite3 version before changing to Postgres. Although I don't really touch vanilla SQL I still go through programming in class and know basic querying.\n "},
         //SQL
    {name: 'MongoDB', text: 
        "Started learning this langauge shortly after finishing a school project at Ivy Tech. Enjoy how easy it is to sort everything and not having to worry about joining multiple tables together and getting confused with how SQL is. Since I am working with it on my mobile app I haven't got that much experience yet but plan to use this language more in the future.\n -Used in 1 School Project\n -Utilized in the development of my mobile app"},
         //MongoDB
    {name: 'Postgress', text: 
        "Learned this framework because I was having diffculties with Sqlite3 in my Django project for Blus Homemade. Though very brief I enjoyed my time learning it and will prioritize my learning over it once I get comfortable with MongoDB.\n Used in the development of Blus Homemade Website "}, 
        //Postgress
  ]


// Amount of projects i'm curretly working on now
export const currentProjects = [
    {image: '/appProduction.jpeg', text: 'First Mobile App', date: '2/14/2025'},
]