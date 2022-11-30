export const ImgCard = ({ image, title, subTitle, link, ghLink }) => (
  <div
    className={
      " group relative place-content-center flex flex-col h-[600px] mb-4 hover:cursor-pointer hover:brightness-[0.9] ease-in-out transition duration-500 "
    }>
    <div
      className={
        "group w-auto h-full place-content-center bg-cover bg-center flex flex-col z-0 contrast-[0.3] shadow-2xl " +
        " hover:shadow-xl sm:rounded-lg border " +
        image
      }
      onClick={() => {
        window.open(link, "blank");
        window.focus();
      }}
    ></div>
    <div className=" opacity-100 z-10 blur-none absolute self-center text-white pointer-events-none ">
      <div className="text-xl m-2 sm:text-3xl font-serif">{title}</div>
      <div className="text-m m-2 ">{subTitle}</div>
    </div>
  </div>
);
