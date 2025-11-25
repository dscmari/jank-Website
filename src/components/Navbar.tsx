type Props = {
  isMobile: boolean;
  isTablet: boolean;
};

export default function ({ isMobile, isTablet }: Props) {
  return (
    <div>
      {isMobile ? (
        <div>
          <div className="text-custom-white bg-custom-darkblue flex items-center justify-center gap-12 p-2">
            <span>01234 123455</span> <span>jan@jankroesche.de</span>
          </div>
          <div className="flex items-center justify-between pl-2 py-8 pr-8">
            <div className="flex flex-col">
              <span className="text-lg logo-headline">JAN KRÖSCHE</span>
              <span className="text-xs">Platz 1 bei Google & Chat GPT</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="burgermenu" id="burger-menu" >
                <span className="top"></span>
                <span className="middle"></span>
                <span className="bottom"></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>{isTablet ? <div>tablet</div> : <div>desktop</div>}</div>
      )}
    </div>
  );
}
