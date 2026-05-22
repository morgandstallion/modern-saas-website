const Features = () => {
  return (
    <section className="wrapper mt-[clamp(2.5rem,-1.071rem+9.524vw,7.5rem)]">
      <h4 className="text-heading-sm max-inline-[clamp(20.938rem,8.571rem+32.976vw,38.25rem)] mx-auto text-center text-balance">
        Everything you need to measure, model, and act on sustainability
      </h4>

      <div className="pt-8 flex justify-center flex-col lg:flex-row gap-8">
        <img
          className="lg:w-[39.938rem]"
          src="src\assets\images\feature-image.png"
          alt="A card showing the ammount of energy consumption used."
        />

        <div className="lg:flex-1 flex flex-col gap-3">
          <div className="border-t border-divider p-4">
            <div className="flex justify-between">
              <p className="text-paragraph-2 font-medium">Track</p>
              <p className="text-sm text-pg-2 font-mono">001</p>
            </div>

            <p className="text-paragraph-2">
              Emissions, energy, and waste across your value chain
            </p>
          </div>

          <div className="border-t border-divider p-4">
            <div className="flex justify-between">
              <p className="text-paragraph-2 font-medium">Track</p>
              <p className="text-sm text-pg-2 font-mono">001</p>
            </div>

            <p className="text-paragraph-2">
              Emissions, energy, and waste across your value chain
            </p>
          </div>

          <div className="border-t border-divider p-4">
            <div className="flex justify-between">
              <p className="text-paragraph-2 font-medium">Model</p>
              <p className="text-sm text-pg-2 font-mono">002</p>
            </div>

            <p className="text-paragraph-2">
              Forecast performance and goal alignment
            </p>
          </div>

          <div className="border-t border-divider p-4">
            <div className="flex justify-between">
              <p className="text-paragraph-2 font-medium">Report</p>
              <p className="text-sm text-pg-2 font-mono">003</p>
            </div>

            <p className="text-paragraph-2">
              Generate ESG disclosures, automate frameworks
            </p>
          </div>

          <div className="border-t border-b border-divider p-4">
            <div className="flex justify-between">
              <p className="text-paragraph-2 font-medium">Act</p>
              <p className="text-sm text-pg-2 font-mono">004</p>
            </div>

            <p className="text-paragraph-2">
              Surface insights and operational next steps
            </p>
          </div>
          <a className="btn w-full lg:w-fit" href="#">
            &#9642; Explore features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
