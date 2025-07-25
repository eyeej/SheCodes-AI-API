function siteSearch(response) {
    preventDefault();
}

let apiKey = "t9e9139a19b801fbcfa020d17a47ob1f";
let prompt = "";
let context = "";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiKey).thenDisplay();