let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
        observer.unobserve(entry.target)
      }
    })
  })
  
  document.querySelectorAll('mark').forEach(mark => {
    observer.observe(mark)
  })