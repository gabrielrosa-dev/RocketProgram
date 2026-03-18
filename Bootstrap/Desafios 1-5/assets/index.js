document.addEventListener('DOMContentLoaded', () => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const contactForm = document.getElementById('contactForm')
    const emailInput = document.getElementById('email')
    const subjectSelect = document.getElementById('subject')
    const messageTextarea = document.getElementById('message')

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    const validateField = (field, condition) => {
        if (condition) {
            field.classList.add('is-valid')
            field.classList.remove('is-invalid')
            return true
        } else {
            field.classList.add('is-invalid')
            field.classList.remove('is-valid')
            return false
        }
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            // Clear previous alerts
            alertPlaceholder.innerHTML = ''

            const isEmailValid = validateField(emailInput, emailInput.value.includes('@') && emailInput.value.includes('.'))
            const isSubjectValid = validateField(subjectSelect, subjectSelect.value !== '')
            const isMessageValid = validateField(messageTextarea, messageTextarea.value.trim() !== '')

            if (isEmailValid && isSubjectValid && isMessageValid) {
                appendAlert('Mensagem enviada com sucesso!', 'success')
                // Optional: clear form
                // contactForm.reset()
                // emailInput.classList.remove('is-valid')
                // subjectSelect.classList.remove('is-valid')
                // messageTextarea.classList.remove('is-valid')
            }
        })
    }
})