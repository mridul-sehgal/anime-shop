//Network calls


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
