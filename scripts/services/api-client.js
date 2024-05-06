//Network calls

// old way , causes call back hell
//function doNetworkCall() {
//   const URL =
//     "https://gist.githubusercontent.com/mridul-sehgal/5c600157b28454648a14f459d1244994/raw/4beb73488caadf5d750c250f096b2f0accaf3f1a/anime.json";

//   const promise = fetch(URL);
//   promise
//     .then((response) => {
//       console.log("Response is", response);
//       const promise2 = response.json();

//       promise2
//         .then((data) => {
//           console.log("DATA IS : ", data);
//         })
//         .catch((e) => {
//           console.log("JSON PARSE ERROR :", e);
//         });

//     })
//     .catch((err) => {
//       console.log("Error is", err);
//     });

//new way using await function , await does not return promise rather returns reponse
//}

async function makeNetworkCall() {
  const URL =
    "https://raw.githubusercontent.com/mridul-sehgal/anime-shop/main/mygist.json";
  try {
    const response = await fetch(URL);
    const object = await response.json();
    return object;
  } catch (error) {
    console.log("Some problem occured during API call", error);
    throw error;
  }
}

export default makeNetworkCall;

// serialization :- object to JSON conversion , function used is stringify()
// deserialization :- JSON to object conversion , function used is parse
