let allProductsBtn = document.querySelectorAll(".move-to-whatsapp");

allProductsBtn.forEach((product) => {
  product.addEventListener("click", (e) => {
    e.preventDefault();

    let message = "";
    if (product.classList.contains("ar")) {
      message = product.id + ": مرحبا, أنا مهتم بالمنتج مع الكود  ";
    } else {
      message = "Hello, i am interested in the item with code :" + product.id;
    }

    let phoneNumber = "+8801630110732";

    // Encode the message for the URL
    let encodedMessage = encodeURIComponent(message);

    // Create the WhatsApp Click to Chat URL
    let whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Open the WhatsApp link in a new tab/window
    window.open(whatsappURL, "_blank");
  });
});
