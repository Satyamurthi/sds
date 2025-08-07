const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText.replace(/,/g, '');
    const increment = target / 300; // slower

    if (count < target) {
      counter.innerText = Math.ceil(count + increment).toLocaleString();
      setTimeout(updateCount, 10); // control speed here
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 1 });

  observer.observe(counter);
});
