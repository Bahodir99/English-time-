let elName = document.querySelector('.name');
let elNumber = document.querySelector('.number');
let elBtn = document.querySelector('.register__btn');
let elModal = document.querySelector('.modal')
let elSelect = document.querySelector('.select')


    let names = []
    let numbers = []
    let courses = []


elBtn.addEventListener('click', (e) => {
    e.preventDefault()



    if (elName.value != '' && elName.value.length > 4 && elNumber.value / 2 != 0 && elNumber.value.length >= 7 && elSelect.value != 'Tanlang') {
        names.push(elName.value);
        numbers.push(elNumber.value)
        courses.push(elSelect.value)
    } else {
        elModal.classList.add('modal__open')
        setTimeout(() => {
            elModal.classList.remove('modal__open')
        }, 5000);
    }
    elName.value = ''
    elNumber.value = ''
    elSelect.value = 'Tanlang'
    console.log(names);
    console.log(numbers);
    console.log(courses);
})

