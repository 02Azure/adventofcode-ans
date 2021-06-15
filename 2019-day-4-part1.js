    // It is a six-digit number.
    // The value is within the range given in your puzzle input.
    // Two adjacent digits are the same (like 22 in 122345).
    // Going from left to right, the digits never decrease; they only ever increase or stay the same (like 111123 or 135679).
    // range 134792-675810.
		// How many different passwords within the range given in your puzzle input meet these criteria?
		
function findTotalCombinations(min, max) {
	let validCode = 0
	
	for(let n = +min; n <= +max; n++) {
		let candidate = n.toString()
		
		while(candidate.length < 6) {
			candidate = "0" + candidate
		}

    candidate = candidate.split("").map(num => +num) //convert to array of Num

		if(isNeverDecreased(candidate) && isHavingTwoAdjacentDigits(candidate)) validCode++
	}
	
	return validCode
}

function isNeverDecreased(code) {
  for(let n = 0; n < code.length - 1; n++) { //check from index 0 to before last index
    if(code[n] > code[n+1]) return false //if anytime that index have a value greater than the next index value, return false
  }
	return true //otherwise return true
}

function isHavingTwoAdjacentDigits(code) {
  for(let n = 0; n < code.length - 1; n++) {
    if(code[n] === code[n+1]) return true //if anytime that index have the a value the same as next index value, return true
  }

	return false //otherwise return false
}

let min = "134792"
let max = "675810"

console.log(findTotalCombinations(min, max))