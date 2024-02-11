import Button from "./Button";

const buttonList = [
  "Gaming",
  "Songs",
  "UFC",
  "Live",
  "Cricket",
  "FootBall",
  "Songs",
  "Cooking",
  "Philosophy",
  "Charisma ",
];

const ButtonList = () => {
  return (
    <div className="flex ml-5">
      {buttonList.map((buttonElement, index) => (
        <Button key={index} name={buttonElement} />
      ))}
    </div>
  );
};

export default ButtonList;
