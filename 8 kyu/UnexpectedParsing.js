// https://www.codewars.com/kata/54fdaa4a50f167b5c000005f/train/javascript

// Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.
// But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.

function getStatus(isBusy) {
  return {
    status: isBusy ? "busy" : "available"
  }
}
