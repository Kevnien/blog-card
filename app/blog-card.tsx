const variables = {
  imageSrc: "blog-card/spacejoy-unsplash.jpg",
  imageAlt: "living space with vibrant colors",
  headerText: "Top 5 Living Room Inspirations",
  text: "Curated vibrants colors for your living, make it pop & calm in the same time.",
  badgeText: "Interior",
  buttonText: "Read more",
  buttonArrowHref: "blog-card/Vector.svg",
};

export default function BlogCard() {
  return (
    <div className="w-[340px] flex flex-col bg-white rounded-lg">
      <img
        className="self-stretch h-72 object-cover rounded-t-lg"
        src={variables.imageSrc}
        alt={variables.imageAlt}
      />
      <div className="flex flex-col gap-3 self-stretch px-4 py-6">
        <div className="header flex flex-col gap-2 self-stretch">
          <div className="badge flex items-center bg-green-50 px-2 py-0.5 rounded-full border border-solid border-green-200 w-fit">
            <span className="font-normal text-sm text-center text-green-700">
              {variables.badgeText}
            </span>
          </div>
          <h2>{variables.headerText}</h2>
        </div>
        <div className="text flex flex-col gap-6 self-stretch">
          <p className="font-medium text-base text-neutral-600">
            {variables.text}
          </p>
          <button tabIndex={0} className="clickReadMore flex justify-center items-center gap-1.5 rounded justify-start text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:shadow-[0px_0px_0px_4px_rgba(0.2666666805744171,0.2980392277240753,0.9058823585510254,0.12)] bg-white w-fit">
            <span className="flex justify-center items-center px-0.5 font-medium text-base">
              {variables.buttonText}
            </span>
            <svg className="w-[13.333333015441895px] h-[12.963600158691406px] text-indigo-700 hover:text-indigo-800">
              <image href={variables.buttonArrowHref} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
