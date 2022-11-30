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
          image="bg-weather"
          title="Integrify Weather"
          subTitle="A simple weather app with an interactive map and serverless functions"
          link="https://github.com/andrewdelamare/integrify-weather"
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
