(() => {
  // <stdin>
  main();
  function main() {
    addWeddingEventsAnimations();
  }
  function addWeddingEventsAnimations() {
    const list = document.querySelector(".wedding-events");
    for (let i = 0; i < list.children.length; i++) {
      const child = list.children[i];
      addDesktopAnimation(child);
      addMobileAnimation(child);
    }
    function addDesktopAnimation(listElement) {
      const image = listElement.querySelector(".image-container");
      const desc = listElement.querySelector(".event-description-container");
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ;
              desc.classList.add("slide-in");
            } else {
              ;
              desc.classList.remove("slide-in");
            }
          });
        },
        {
          threshold: 0.3
        }
      );
      observer.observe(image);
    }
    function addMobileAnimation(listElement) {
      const desc = listElement.querySelector(".event-description-container");
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              ;
              desc.classList.add("show-up");
            } else {
              ;
              desc.classList.remove("show-up");
            }
          });
        },
        {
          threshold: 0.2
        }
      );
      observer.observe(desc);
    }
  }
})();
