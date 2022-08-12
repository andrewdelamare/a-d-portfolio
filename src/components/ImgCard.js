export const ImgCard = ({ image, title, subTitle, link, ghLink }) => (
  <div
    className={
      image + " relative place-content-center flex flex-col h-[600px] mb-4"
    }
  >
    <div
      className={
        "w-auto h-full place-content-center bg-cover bg-center flex flex-col z-0 contrast-[30%] transition shadow-2xl hover:brightness-[80%] hover:shadow-xl " +
        image
      }
      onClick={() => window.open(link, "blank")}
    ></div>
    <div className=" opacity-100 z-10 blur-none absolute self-center text-white">
      <div className="text-xl m-2 sm:text-3xl font-serif">{title}</div>
      <div className="text-m m-2 ">{subTitle}</div>
    </div>
  </div>
);
