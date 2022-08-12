/* 
export const ImgCard = ({ image, title, subTitle, link, ghLink }) => {
  return (
  <div 
  className={image + 
  " flex flex-col border-4 border-slate-800 text-white rounded-lg p-7 my-3 shadow-xl w-full h-500 bg-cover bg-center items-center place-content-center contrast-50 "
  }
  onClick={() => window.open(link, "blank") } 
   >
    <h2 className="text-3xl">{title}</h2>
    <p className="text-xl">{subTitle}</p>
  </div>
  );
};
 */
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
