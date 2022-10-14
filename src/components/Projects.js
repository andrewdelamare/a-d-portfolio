import { Card } from "./Card";
import { ImgCard } from "./ImgCard";
export const Projects = () => {
  return (
    <div
      id="projects"
      className=" sm:gap-9 sm:w-4/5 sm:justify-center mx-auto my-64 pt-32"
    >
      <h1 className="col-span-2 text-2xl sm:text-4xl">Projects</h1>
      <div className="flex flex-col w-full">
        <ImgCard
          image="bg-devAcademy"
          title="Dev Academy Project"
          subTitle="A full stack data exploration app built with React and NodeJs"
          link="https://github.com/andrewdelamare/SDA-Fall22"
          ghLink=""
        />
        <ImgCard
          image="bg-hotelFe "
          title="Fake Hotel (front end)"
          subTitle="React, react router, and axios based front end"
          link="https://github.com/andrewdelamare/fake-hotel-fe"
          ghLink=""
        />
        <ImgCard
          image="bg-hotelBe "
          title="Fake hotel (back end)"
          subTitle="NodeJs, mongoose, and express based back end"
          link="https://github.com/andrewdelamare/fake-hotel-be"
          ghLink=""
        />
        <ImgCard
          image="bg-calendar"
          title="React Booking Calendar"
          subTitle="An Air-Bnb inspired booking calendar"
          link="https://github.com/andrewdelamare/react-booking-calendar"
          ghLink=""
        />
      </div>
    </div>
  );
};

/*    <div
      id="projects"
      className="sm:grid sm:grid-cols-2 sm:gap-9 w-4/5 sm:justify-center mx-auto my-64 pt-32"
    >
      <h1 className="col-span-2 text-2xl sm:text-4xl">Projects</h1>
      <div className="flex flex-col w-full">
        <ImgCard 
          image="bg-devAcademy" 
          title="Dev Academy Project" 
          subTitle="A full stack data exploration app built with JS, React, and NodeJs" 
          link="" 
          ghLink=""

        />
        <Card
          pName="Full stack blog app"
          pDesc="This was a Full Stack MOOC project. I used a version of the back end api I had previously made, and added the ability to create comments on blogs.
        I also completely reworked the app to use Redux for state management. Logged in users can create, update and delete blogs, plus like and comment on them. 
        This was my first Redux project, I think it was a bit too small to benefit from the global state management Redux offers although it was a fun challenge to implement."
          pUrl="https://github.com/andrewdelamare/Full-Stack-Open-2021-Submissions/tree/master/part7/exercises_9-21"
          pTech="JS, React, Redux, Node.js, Express"
        />

        <Card
          pName="My first personal website"
          pDesc="This project was was my first attempt at a personal portfolio site, and my first ever complete website. 
        It was the culmination of all of the skills I had learned up to that point, and it was really great to build something of my own that I felt proud of."
          pUrl="https://github.com/andrewdelamare/andrewdelamare.github.io"
          pTech="HTML, CSS, JS"
        />
      </div>
      <div className="flex flex-col">
        <Card
          pName="Back end api for blog app"
          pDesc="This was part of the University of Helsinki Full Stack MOOC, I've iterated on it and used it as a base for lots of the later projects in the course. 
        This uses a simple document database to store blog information as well as hashed account information. 
        Users with correct log in credentials can create, update and delete blogs. I also built tests using jest to verify the core functionality."
          pUrl="https://github.com/andrewdelamare/Full-Stack-Open-2021-Submissions/tree/master/part4/bloglist"
          pTech="JS, Node.js, Express, Jest"
        />
      </div>
    </div> */
