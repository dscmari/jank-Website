type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function ATF({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div className="h-screen">
          <h1 className="p-8 px-12 text-custom-darkblue !text-5xl/14 text-center headline tracking-tight">
            Nummer 1 bei Google und Chat GPT?
          </h1>
          <div className="relative">
            <img
              src="/images/portrait_platzhalter.png"
              alt="Portrait von Jan Krösche"
              className=""
            />
            <div className="flex gap-1 absolute left-1/2 -translate-x-1/2 bottom-1/4 w-5/6 items-center justify-center">
              <button className="cta-button min-w-1/2 bg-white text-custom-blue rounded py-2 px-4 border border-custom-darkblue tracking-tight">
                Zum Angebot
              </button>
              <button className="cta-button min-w-1/2 bg-custom-green text-custom-white rounded py-2 px-4 border border-white tracking-tight">
                SEO Tipps
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>{isTablet ? <div>tablet</div> : <div>desktop</div>}</div>
      )}
    </div>
  );
}
