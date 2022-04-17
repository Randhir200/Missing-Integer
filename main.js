function runProgram(input) {
    var arr = input.trim().split(" ").map(Number);
    var n=arr.length+1;
    var actualSum = Math.floor((n*(n+1))/2);
    var missingSum = 0;
    for(var i=0;i<arr.length;i++){
        missingSum +=arr[i];
    }
    console.log(actualSum-missingSum);

}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

