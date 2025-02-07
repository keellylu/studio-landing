import classNames from "classnames";
import "../styles/font.css"

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "space-grotesk-300 my-3 text-[2.5rem] sm:text-[5rem] md:text-[6rem] leading-[4rem] sm:leading-[7rem] md:leading-[8rem] tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroTitle2 = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "space-grotesk-font my-6 text-[4rem] sm:text-[5rem] md:text-[6rem] tracking-tight",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={classNames(
        "space-grotesk-300 text-white md:text-[2.8rem] text-2xl",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Description = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={classNames(
        "font-light text-white md:text-xlg text-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Description2 = ({ children, className }: HeroElementProps) => {
  return (
    <div
      className={classNames(
        "font-light text-gray md:text-xlg text-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
