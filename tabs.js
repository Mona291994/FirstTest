// let tabtitle = document.querySelector('.tab-title-wrapper');
// tabtitle.addEventListener('click', tabsFunction);
let tabtitle = document.querySelectorAll('.tab-title');

tabtitle.forEach((item, i) => {
  item.addEventListener('click', tabsFunction);
});
function tabsFunction(e) {
  let currenttarget = e.target;
  if (document.querySelector('.tab-title.active')) {
    let currentactivetab = document.querySelector('.tab-title.active');
    let currentactivecontent = document.querySelector('.tab-content.active');
    if (currenttarget.id !== currentactivetab.id) {
      currentactivecontent.style.display = 'none';
      currentactivetab.classList.remove('active');
      currentactivecontent.classList.remove('active');
    }
    currenttarget.classList.add('active');
    let currenttabdata = currenttarget.getAttribute('data-tab');
    let tabcontent = document.querySelectorAll('.tab-content');
    tabcontent.forEach((item, i) => {
      if (currenttabdata == item.getAttribute('data-tab')) {
        let currenttargetcontent = item;
        currenttargetcontent.classList.add('active');
        currenttargetcontent.style.display = 'block';
      }
    });
  }
}

// function tabsFunction(e) {
//   let currenttarget = e.target;
//   if (document.querySelector('.tab-title.active')) {
//     let currentactivetab = document.querySelector('.tab-title.active');
//     let currentactivecontent = document.querySelector('.tab-content.active');
//     if (currenttarget.id !== currentactivetab.id) {
//       currentactivecontent.style.display = 'none';
//       currentactivetab.classList.remove('active');
//       currentactivecontent.classList.remove('active');
//     }
//     currenttarget.classList.add('active');
//     let currenttabdata = currenttarget.getAttribute('data-tab');
//     let tabcontent = document.querySelectorAll('.tab-content');
//     tabcontent.forEach((item, i) => {
//       if (currenttabdata == item.getAttribute('data-tab')) {
//         let currenttargetcontent = item;
//         currenttargetcontent.classList.add('active');
//         currenttargetcontent.style.display = 'block';
//       }
//     });
//   }
// }
