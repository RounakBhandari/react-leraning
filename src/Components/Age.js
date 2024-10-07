const handleClick = () => {
  const age = prompt("Enter your age");
  const value = Number(age);
  isNaN(value) ? alert("Enter Valid Number") : toBeChecked(age);
};

const toBeChecked = (age) => {
  if (age < 20 && age > 0) {
    alert("You are a tenageer");
  } else if (age > 20 && age < 60) {
    alert("You are an adult");
  } else if (age > 60 && age < 100) {
    alert("You are old");
  } else {
    alert("Invalid");
  }
};

const Age = () => {
  return (
    <div className="p-4">
      <button onClick={() => handleClick()} className="bg-black text-white px-2 py-1 rounded-lg">
        Click For Age
      </button>
    </div>
  );
};

export default Age;
