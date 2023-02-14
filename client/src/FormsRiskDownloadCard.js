export default function FormsRiskDownloadCard({ card }) {
  return (
    <div className="card hover:shadow-lg cursor-pointer m-2 justify-center w-16 sm:w-24 md:w-auto h-auto">
      <a href={card.link} download className=''>
        <div className="m-4 flex flex-wrap justify-center text-center items-center">
            <img src={card.imageURL} alt={card.imageAlt} className="h-auto w-auto object-cover flex" />
          <div className="flex flex-col">
            <h1 className="mt-4 font-bold text-blue-700 block text-[11px] sm:text-sm xl:text-lg text-center">{card.title}</h1>
              <p className="mt-2 text-gray-800 text-center text-[10px] sm:text-xs xl:text-base ">{card.description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}