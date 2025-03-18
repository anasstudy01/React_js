


// const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
const Alphabet = new Array(26).fill("").map((e, index) => String.fromCharCode(65 + index));




function LetterButtons({usedLetters,onLetterClick}) {

const selectedLetters = new Set(usedLetters.join('').toUpperCase());
const buttonStyle = function(letter){
    if(selectedLetters.has(letter)){
        return "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded";
    } else {
        return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
    }
}
 const handleClick = function (e) {
     const characters = e.target.value;
     onLetterClick?.(characters);
}

    const buttons = Alphabet.map((letter) => {
    return (
      <button
        key={`buttons-${letter}`}
        className={`h-12 w-12 m-1  rounded-md focus:outline-none text-white ${buttonStyle(letter)}`}
        value ={letter}
        disabled={selectedLetters.has(letter)}
        onClick={handleClick}

      >
        {letter}
      </button>
    );
  });

  return (
    <>
      <div className="flex flex-wrap gap-2">{buttons}</div>
    </>
  );
}

export default LetterButtons;
