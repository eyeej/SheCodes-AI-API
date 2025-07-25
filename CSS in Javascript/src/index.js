function siteSearch(response) {
    preventDefault();
    console.log();
}

let apiKey = "t9e9139a19b801fbcfa020d17a47ob1f";
let prompt = "enter current date";
let context = "Please provide real time news on artificial intelligence";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiKey).then(showResponse);