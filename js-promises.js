function myFunction() {
  return new Promise((resolve, reject) => {
    //synchronus or asynchronous logic here
    //For example, you can use setTimieout to simulate an asynchrounous operations
    setTimeout(() => {
      const success = true; //assume the operation was successful

      if (success) {
        console.log("Function completed!");
        resolve(); // Resolve the promise to indicate that the function is done
      } else {
        const error = new Error("Something went wrong");
        console.error(error);
        reject(error); // Reject the promise with an error
      }
    }, 1000);
  });
}

// Usage
myFunction()
  .then(() => {
    console.log("Code to be executed after myFunction is done. ");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

/*
In this modified example, if the "success" variable is "true", the
promise is resolved, and the code inside the ".then()" block will be 
executed. If "success" is "false", an error is created, and te promise is rejected,
triggering the code inside the ".catch()" block. This way, you can handle both 
successful and error scenarious within the "myFunction"
 */

/*testing to see if a function below .then and .catch will work
    -edit: it DOES work */
const testFunc = () => {
  console.log("test passed");
};
