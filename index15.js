function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong");
    }, 3000);
  });
}
async function main() {
  try {
    const result = await fetchData();
    console.log(result);
    console.log("Program Completed");
  } catch (err) {
    console.log(err);
  }
}
main();

// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Recieved!")
//         },3000)
//     })
// }
// async function main(){
//     const result = await fetchData()
//     console.log(result)
//     console.log("Program Completed")
// }
// main()
