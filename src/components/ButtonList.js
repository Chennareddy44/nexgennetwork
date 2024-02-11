import Button from "./Button";

const buttonList = [
  "Gaming",
  "Songs",
  "UFC",
  "Live Stream",
  "Cricket",
  "FootBall",
  "Songs",
  "Cooking",
  "Philosophy",
  "Charisma ",
];

const ButtonList = () => {
  return (
    <div className="flex ml-0">
      {buttonList.map((buttonElement, index) => (
        <Button key={index} name={buttonElement} />
      ))}
    </div>
  );
};

export default ButtonList;
