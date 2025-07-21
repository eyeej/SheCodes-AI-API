function ShowAnswer(response) {
    console.log(processed);
    alert(response.data.answer);
}

let apiKey = "t9e9139a19b801fbcfa020d17a47ob1f";
let context = "Please tell me who was the first female president";
let prompt = "Who was the first female president and detail the dates";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing");
axios.get(apiUrl).then(displayAnswer);