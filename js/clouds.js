function startClouds() {
  const sky = document.getElementById("sky");

  class Cloud {
    leftImg = new Image();
    rightImg = new Image();

    constructor(x, y, z) {
      this.leftImg.src = this.rightImg.src = "images/cloud.png";
      this.leftImg.className = this.rightImg.className = "cloud";

      sky.appendChild(this.leftImg);
      sky.appendChild(this.rightImg);

      this.x = x;
      this.positionX();
      this.leftImg.style.top = y + "%";
      this.rightImg.style.top = y + "%";
      this.leftImg.style.width = z + "%";
      this.rightImg.style.width = z + "%";
    }

    positionX() {
      this.leftImg.style.left = this.x + "%";
      this.rightImg.style.left = this.x + 100 + "%";
    }

    update(dt) {
      this.x -= dt / 500;
      while (this.x < -100) {
        this.x += 100;
      }
      this.positionX();
    }
  }

  const clouds = new Set(); 

  clouds.add(new Cloud(2, 30, 25));
  clouds.add(new Cloud(21, 76, 12));
  clouds.add(new Cloud(36, 12, 9));
  clouds.add(new Cloud(43, 37, 29));
  clouds.add(new Cloud(61, 79, 20));
  clouds.add(new Cloud(69, -3, 25));

  let timestamp = performance.now();

  function animate(ts) {
    const dt = ts - timestamp;
    timestamp = ts;

    clouds.forEach(cloud => {
      cloud.update(dt);
    });

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}