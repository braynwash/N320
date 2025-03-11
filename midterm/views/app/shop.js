import { InvoicePDFGenerator } from "./invoicePDFGenerator.js";

// CART LOGIC
let cart = [];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.getAttribute("data-name");
    const price = parseFloat(button.getAttribute("data-price"));
    const existingItem = cart.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCheckoutButton();
  });
});

document.getElementById("checkout").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (cart.length === 0 || !name || !email) {
    //error handling
    alert(
      "Check out failed: please ensure ALL fields are filled and you have items in your cart!"
    );
    return;
  }

  //PDF Generation via BLob URL
  const invoiceGenerator = new InvoicePDFGenerator(name, email, cart);
  const pdfDoc = invoiceGenerator.generatePDF();

  const pdfBlob = pdfDoc.output("blob");
  const blobUrl = URL.createObjectURL(pdfBlob);

  const pdfPreview = document.getElementById("pdf-preview");
  pdfPreview.src = blobUrl;

  document.getElementById("downloadPdf").style.display = "inline-block"; //show download btn
  document.getElementById("pdf-preview").style.display = "inline-block"; //show iframe

  document.getElementById("downloadPdf").addEventListener("click", () => {
    //downlad logic
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = `taystreats_invoice_${invoiceGenerator.invoiceNumber}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  });
});

function updateCheckoutButton() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const checkoutButton = document.getElementById("checkout");

  if (cart.length > 0 && name && email) {
    checkoutButton.disabled = false;
  } else {
    checkoutButton.disabled = true;
  }
}

document.getElementById("name").addEventListener("input", updateCheckoutButton);
document
  .getElementById("email")
  .addEventListener("input", updateCheckoutButton);
