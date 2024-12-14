
const checkForImage = (text: string) => {
    var base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

    return base64regex.test(text);
}

const encodeImageToBase64 = (image: HTMLInputElement) => {
    if (!image.files)
        throw new Error("Selected image must not be empty");

    let file = image.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        console.log('RESULT', reader.result)
    }
    reader.readAsDataURL(file);
}

export { checkForImage }

