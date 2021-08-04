 const labels = document.querySelectorAll('.input-container label');

 console.log(labels)

 labels.forEach(label => {
    label.innerHTML = label.innerText.split('').map((letter, index) => `<span style="transition-delay:${index * 50}ms">${letter}</span>`).join('');
 });
 


