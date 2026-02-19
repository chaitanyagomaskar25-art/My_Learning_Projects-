const images = [
      "https://plus.unsplash.com/premium_photo-1664298807846-b7989767c04e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1630304565761-d6f8d5a0facd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1635377361665-60442f6cf799?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3V0ZSUyMGJhYnl8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1608365151231-7dbed3034787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://plus.unsplash.com/premium_photo-1663011019159-2f45382b3d91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1477239439998-839196943351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1737949494259-e9fa9ef4786a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1704988935392-09fc355154aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1542128961-ccec213a5c53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1504447932885-85a9ae0e1629?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1557939574-a2cb399f443f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1510154106653-3d0859b71c81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxjdXRlJTIwYmFieXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1616656911313-3394ccb03318?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGN1dGUlMjBiYWJ5fGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1591776353202-aed91f04fb81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1591776346443-a34eab8ea041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D"
    ];

    let index = 0;

    const img = document.getElementById("sliderImage");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    function showImage() {
      img.src = images[index];
    }

    next.addEventListener("click", () => {
      index++;
      if (index >= images.length) index = 0;
      showImage();
    });

    prev.addEventListener("click", () => {
      index--;
      if (index < 0) index = images.length - 1;
      showImage();
    });

    showImage();