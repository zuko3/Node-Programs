/**
 *async ensures that the function returns a promise 
 */
async function func(){
    return 1;
}
func().then((res)=>console.log(res));



async function funcMain(){
   return Promise.resolve(2);
}
funcMain().then((res)=>console.log(res));


Promise.resolve("----").then((res)=>console.log(res));


/**
 * The keyword await makes JavaScript wait until that promise settles and returns its result
 */

async function funcMain1() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("promise resolved after 2 seconds!"), 2000)
    });
    const result = await promise; // wait till the promise resolves
    console.log(result);
}

funcMain1();

async function showAvatar() {

    // read our JSON
    let response = await fetch('user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    //Some code
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  }
  
  showAvatar();



/**
 * Error Handling
 */

  async function ErrorMain() {
    await Promise.reject(new Error("Whoops!"));
  }

  async function ErrorMain1() {
    throw new Error("Whoops!");
  }


  async function ErrorHandling() {

    try {
      let response = await fetch('/no-user-here');
      let user = await response.json();
    } catch(err) {
      // catches errors both in fetch and response.json
      alert(err);
    }
  }
  ErrorHandling();