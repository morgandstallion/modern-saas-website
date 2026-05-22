const Hero = () => {
  return (
    <div className="hero flex flex-col items-center justify-center wrapper hero-gradient">
      <h1 className="relative z-10 flex flex-col items-center pt-[clamp(3.75rem,3.31rem+1.878vw,5rem)]">
        <span className="text-heading-base font-serif pb-2 whitespace-nowrap">
          Sustainability insights,
        </span>
        <span className="text-heading-sub">built for business</span>
      </h1>

      <p className="relative z-10 text-paragraph-2 text-center py-4">
        Track impact, reduce emissions, and accelerate progress—with clarity and
        confidence.
      </p>

      <div className="relative z-10 flex flex-col items-center gap-4 mt-2 md:flex-row">
        <a className="btn" href="#">
          &#9642; Request a demo
        </a>
        <a className="btn" href="#">
          &#9642; Explore the platform
        </a>
      </div>

      <img
        className="relative z-10 w-[clamp(20.938rem,-6.964rem+74.405vw,60rem)] mt-[clamp(2rem,1.571rem+2.143vw,3.5rem)]"
        src="src\assets\images\hero-image.png"
        alt="A dashboard for Acme inc"
      />
    </div>
  );
};

export default Hero;
