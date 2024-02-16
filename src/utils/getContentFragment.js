import { Fragment } from "react";

export const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;
  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-one":
      return (
        <h3 key={index} className="text-[4vw] sm:text-xl font-semibold leading-snug mb-2 sm:mb-4">
          {modifiedText.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </h3>
      );
    case "heading-two":
      return (
        <h3 key={index} className="text-[3.5vw] sm:text-xl font-semibold leading-snug mb-2 sm:mb-4">
          {modifiedText.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </h3>
      );
    case "heading-three":
      return (
        <h3 key={index} className="text-[3vw] sm:text-xl font-semibold leading-snug mb-2 sm:mb-4">
          {modifiedText.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} className="text-[2.5vw] sm:text-xs lg:text-base text-justify text-copy-darker leading-snug mb-2 sm:mb-8">
          {modifiedText.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </p>
      );
    case "heading-four":
      return (
        <h4 key={index} className="text-[3vw] sm:text-base font-semibold leading-snug mb-2 sm:mb-4">
          {modifiedText.map((item, i) => (
            <Fragment key={i}>{item}</Fragment>
          ))}
        </h4>
      );
    case "image":
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};
