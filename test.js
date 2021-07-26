
// Grab by class
$('.vague').forEach(a).toLowercase().replace('-', ' ');
// remove hyphens and lowercase 

// grab table by id
$('#car').forEach((tr) => {
    if (tr.index() === 0) {
        tr.find(td).addAttribute('role', 'columnheader')
    } else {
        tr.find(td).first().addAttribute('role', 'rowheader')
    }
})
