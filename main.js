// التفاعل مع قائمة الموبايل
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  
  // تغيير أيقونة القائمة بين فتح وإغلاق
  if (navLinks.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// إغلاق القائمة عند الضغط على أي رابط في الموبايل
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});