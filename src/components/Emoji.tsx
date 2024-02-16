import { Icon, Image, ImageProps, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaMeh, FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { GoGoal } from "react-icons/go";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // mosh method
  // const emojiMap: { [key: number]: ImageProps } = {
  //   3: { src: FaMeh, alt: "meh" },
  //   4: { src: FaThumbsUp, alt: "ThumbsUp" },
  //   5: { src: GoGoal, alt: "Goal" },
  // };

  // return <Image {...emojiMap[rating]} />;
  // /mosh method

  // icon method
  // const emojiMap: { [key: string]: IconType } = {
  //   3: FaMeh,
  //   4: FaThumbsUp,
  //   5: GoGoal,
  // };

  // return <Icon as={emojiMap[rating]} />;
  // /icon method

  // my method
  let arr: number[] = [];
  switch (rating) {
    case 3:
      {
        arr = [3];
      }
      break;
    case 4:
      {
        arr = [3, 4];
      }
      break;
    case 5:
      {
        arr = [3, 4, 5];
      }
      break;
  }
  return (
    <Text paddingY={2}>
      {arr.map((item) => (
        <Icon as={FaStar} />
      ))}
    </Text>
  );
  // /my method
};

export default Emoji;

// import bullsEye from "../assets/bulls-eye.webp";
// import thumbsUp from "../assets/thumbs-up.webp";
// import meh from "../assets/meh.webp";
// import { Image, ImageProps } from "@chakra-ui/react";

// interface Props {
//   rating: number;
// }

// const Emoji = ({ rating }: Props) => {
//   if (rating < 3) return null;

//   const emojiMap: { [key: number]: ImageProps } = {
//     3: { src: meh, alt: "meh", boxSize: "25px" },
//     4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
//     5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
//   };

//   return <Image {...emojiMap[rating]} marginTop={1} />;
// };

// export default Emoji;
