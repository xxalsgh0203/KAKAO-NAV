async function asyncFunction() {
    console.log("1등");
    await second();
    await third();
  }
  
  function second() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("2등");
        resolve();
      }, 2000);
    });
  }
  
  function third() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("3등");
        resolve();
      }, 2000);
    });
  }
  
  asyncFunction();