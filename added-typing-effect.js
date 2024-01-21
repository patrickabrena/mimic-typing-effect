/*bringing in js from slot-effect-on-load and adding in typing effect feature AFTER 
    the for loops are done iterating
    
    -will probably have to use promises to achieve effect*/
/*Test Code 6 -  */
// document.addEventListener("DOMContentLoaded", function () {
//   const img_looping_effect5 = () => {
//     const firstbox = document.getElementById("box-first-child");
//     const secondbox = document.getElementById("box-second-child");
//     const thirdbox = document.getElementById("box-third-child");

//     const imageContainer = [firstbox, secondbox, thirdbox];

//     const imageUrls = [
//       "../mimic-typing-effect/img/rock-final.png",
//       "../mimic-typing-effect/img/hand-final.png",
//       "../mimic-typing-effect/img/scissors-final.png",
//     ];

//     //
//     //
//     //forLoop user input
//     const repeatForLoop = (targetIndex) => {
//       const displayTime = 60;
//       const offsetTimer = 5;
//       for (let i = 0; i < imageContainer.length; i++) {
//         const updatedDelay = offsetTimer * i;

//         const numLoops = i + 2;
//         const imgArrLength = imageUrls.length;

//         for (let j = 0; j < imgArrLength * numLoops; j++) {
//           setTimeout(() => {
//             const currentImageUrlIndex = j % imgArrLength;
//             imageContainer[i].innerHTML = `<img src= "${
//               imageUrls[(currentImageUrlIndex + targetIndex) % imgArrLength]
//             }" alt="Please Reload App"> `;
//           }, j * displayTime + updatedDelay);
//         }
//       }
//     };
//     //
//     //
//     //forLoop on load displaying rock, paper, scissors
//     const onLoadForLoop = () => {
//       const displayTime = 80;

//       const offsetTimer = 100;
//       for (let i = 0; i < imageContainer.length; i++) {
//         const updatedDelay = offsetTimer * i;
//         const slowDisplayTime = i * 5; // slow down factor variable
//         const updatedDisplayTime = displayTime + slowDisplayTime; // each successive container will have slower display time
//         const numLoops = i + 4;
//         const imgArrLength = imageUrls.length;

//         for (let j = 0; j < imgArrLength * numLoops; j++) {
//           setTimeout(() => {
//             const nextIndex = i + imgArrLength; // literally just adding the current idex the loop is on to imageUrls.length
//             // const currentImageUrlIndex = j; at j it shows scissors paper rock
//             const currentImageUrlIndex = j + 1; // shows rock paper scissors

//             imageContainer[i].innerHTML = `<img src= "${
//               imageUrls[(currentImageUrlIndex + nextIndex) % imgArrLength]
//             }" alt="Please Reload App">`;
//           }, j * updatedDisplayTime + updatedDelay);
//         }
//       }
//     };

//     const loopTriggerRock = document.getElementById("loop-trigger-rock");
//     const loopTriggerPaper = document.getElementById("loop-trigger-paper");
//     const loopTriggerScissors = document.getElementById(
//       "loop-trigger-scissors"
//     );
//     //
//     loopTriggerRock.onclick = () => {
//       repeatForLoop(1);
//     };
//     //
//     loopTriggerPaper.onclick = () => {
//       repeatForLoop(2);
//     };
//     //
//     loopTriggerScissors.onclick = () => {
//       repeatForLoop(3);
//     };
//     window.onload = onLoadForLoop;
//     //
//     //
//     //

//     const myPromise = new Promise((resolve, reject) => {});
//   };

//   img_looping_effect5(); // Call the function to set up the event handler
// });
/*Test Code 6 */
//
//
//
/*Test Code 7 -  */
document.addEventListener("DOMContentLoaded", function () {
  const img_looping_effect5 = () => {
    const firstbox = document.getElementById("box-first-child");
    const secondbox = document.getElementById("box-second-child");
    const thirdbox = document.getElementById("box-third-child");

    const imageContainer = [firstbox, secondbox, thirdbox];

    const imageUrls = [
      "../mimic-typing-effect/img/rock-final.png",
      "../mimic-typing-effect/img/hand-final.png",
      "../mimic-typing-effect/img/scissors-final.png",
    ];

    //
    //
    //forLoop user input
    const repeatForLoop = (targetIndex) => {
      return new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          console.log("repeatForLoop function");
          resolve();
        } else {
          const error = new Error("Something Went Wrong");
          reject(error);
        }
        const displayTime = 60;
        const offsetTimer = 5;
        for (let i = 0; i < imageContainer.length; i++) {
          const updatedDelay = offsetTimer * i;

          const numLoops = i + 2;
          const imgArrLength = imageUrls.length;

          for (let j = 0; j < imgArrLength * numLoops; j++) {
            setTimeout(() => {
              const currentImageUrlIndex = j % imgArrLength;
              imageContainer[i].innerHTML = `<img src= "${
                imageUrls[(currentImageUrlIndex + targetIndex) % imgArrLength]
              }" alt="Please Reload App"> `;
            }, j * displayTime + updatedDelay);
          }
        }
      });
    };
    //
    //
    //forLoop on load displaying rock, paper, scissors
    const onLoadForLoop = () => {
      const displayTime = 80;

      const offsetTimer = 100;
      for (let i = 0; i < imageContainer.length; i++) {
        const updatedDelay = offsetTimer * i;
        const slowDisplayTime = i * 5; // slow down factor variable
        const updatedDisplayTime = displayTime + slowDisplayTime; // each successive container will have slower display time
        const numLoops = i + 4;
        const imgArrLength = imageUrls.length;

        for (let j = 0; j < imgArrLength * numLoops; j++) {
          setTimeout(() => {
            const nextIndex = i + imgArrLength; // literally just adding the current idex the loop is on to imageUrls.length
            // const currentImageUrlIndex = j; at j it shows scissors paper rock
            const currentImageUrlIndex = j + 1; // shows rock paper scissors

            imageContainer[i].innerHTML = `<img src= "${
              imageUrls[(currentImageUrlIndex + nextIndex) % imgArrLength]
            }" alt="Please Reload App">`;
          }, j * updatedDisplayTime + updatedDelay);
        }
      }
    };

    const loopTriggerRock = document.getElementById("loop-trigger-rock");
    const loopTriggerPaper = document.getElementById("loop-trigger-paper");
    const loopTriggerScissors = document.getElementById(
      "loop-trigger-scissors"
    );
    //
    loopTriggerRock.onclick = () => {
      repeatForLoop(1)
        .then(() => {
          console.log("Code to be executed after repeatForLoop is done");
          setTimeout(() => {
            console.log("delayed execution response");
          }, 1000);
        })
        .catch((error) => {
          console.error("an error occurred:", error);
        });
    };
    //
    loopTriggerPaper.onclick = () => {
      repeatForLoop(2);
    };
    //
    loopTriggerScissors.onclick = () => {
      repeatForLoop(3);
    };
    window.onload = onLoadForLoop;
    //
    //
    //
  };

  img_looping_effect5(); // Call the function to set up the event handler
});
/*Test Code 7 */
