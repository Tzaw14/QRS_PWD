let qrInstance = null;

function generateQR() {
  const link = document.getElementById('link').value.trim();
  const size = parseInt(document.getElementById('size').value);

  if (!link) {
    alert("Por favor, pegá una URL válida.");
    return;
  }

  // Limpiar QR previo
  document.getElementById('qrcode').innerHTML = "";

  // Generar QR en negro
  qrInstance = new QRCode(document.getElementById('qrcode'), {
    text: link,
    width: size,
    height: size,
    colorDark: "#000000",       // 🔹 negro fijo
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

function downloadQR() {
  const img = document.querySelector('#qrcode img') || document.querySelector('#qrcode canvas');
  if (!img) {
    alert("Primero generá el QR");
    return;
  }

  let dataUrl;
  if (img.tagName.toLowerCase() === 'canvas') {
    dataUrl = img.toDataURL("image/png");
  } else {
    dataUrl = img.src;
  }

  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = "mi_codigo_qr.png";
  link.click();
}
