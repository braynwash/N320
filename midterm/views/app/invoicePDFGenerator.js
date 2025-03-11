import { jsPDF } from "./jspdf.es.js";

export class InvoicePDFGenerator {
  constructor(customerName, customerEmail, cartItems) {
    this.customerName = customerName;
    this.customerEmail = customerEmail;
    this.cartItems = cartItems;
    this.invoiceNumber = this.generateInvoiceNumber();
    this.dateOfPurchase = new Date().toLocaleString();
  }

  // number generator
  generateInvoiceNumber() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }

  calculateTotal() {
    const subtotal = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.07; // 7% tax
    const grandTotal = subtotal + tax;
    return { subtotal, tax, grandTotal };
  }

  generatePDF() {
    const doc = new jsPDF();
    const { subtotal, tax, grandTotal } = this.calculateTotal();

    // Company Details
    doc.setFontSize(18);
    doc.text("Tay's Treats", 10, 20);
    doc.setFontSize(12);
    doc.text("123 Jeremy Street, Jeremyland, JB 102803", 10, 30);
    doc.text("Phone: (555) 555-5555 | Email: taystreats@gmail.com", 10, 40);

    // Customer Details
    doc.text(`Customer Name: ${this.customerName}`, 10, 60);
    doc.text(`Customer Email: ${this.customerEmail}`, 10, 70);

    // Invoice Details
    doc.text(`Invoice Number: ${this.invoiceNumber}`, 10, 90);
    doc.text(`Date of Purchase: ${this.dateOfPurchase}`, 10, 100);

    // Itemized List
    doc.text("Product Name", 10, 120);
    doc.text("Price", 70, 120);
    doc.text("Quantity", 120, 120);
    doc.text("Your Total", 160, 120);

    let y = 130;
    this.cartItems.forEach((item) => {
      doc.text(item.name, 10, y);
      doc.text(`$${item.price.toFixed(2)}`, 70, y);
      doc.text(item.quantity.toString(), 120, y);
      doc.text(`$${(item.price * item.quantity).toFixed(2)}`, 160, y);
      y += 10;
    });

    // Totals
    doc.text(`Subtotal: $${subtotal.toFixed(2)}`, 10, y + 10);
    doc.text(`Tax: $${tax.toFixed(2)}`, 10, y + 20);
    doc.text(`Final Total: $${grandTotal.toFixed(2)}`, 10, y + 30);

    return doc;
  }
}
