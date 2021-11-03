import '../index.css'

import {signInInputList, signUpInputList, restorePasswordInputList, validationSettings} from "./constants";

import FormValidator from "./FormValidator";


class Model {
    constructor() {
        this.users = localStorage.getItem('users') || [
            {email: 'admin@admin.ru', password: 'admin'}
        ]
    }

    signUp(user) {
        this.users = JSON.parse(localStorage.getItem('users')) || []
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users))
        return 'ok';
    }

    signIn(user) {
        this.users = JSON.parse(localStorage.getItem('users')) || [{email: 'admin@admin.ru', password: 'admin'}]
        if (this.users.contains(user)) {
            return 'ok'
        }
        else {
            return 'error'
        }
    }
}

class View {
    constructor() {
        this.app = this.getElement('#root')
        this.page = this.createElement('div', 'page')
        this.app.append(this.page)
    }

    renderSignUp () {
        this.clearContent()
        this.form = this.createElement('form', 'authorization')
        this.title = this.createElement('h1', 'authorization__title')
        this.title.textContent = 'Sign Up'
        this.submit = this.createElement('button', 'authorization__submit')
        this.submit.textContent = 'Sign Up'
        this.submit_icon = this.createElement('span', 'icon-submit')
        this.submit.append(this.submit_icon)
        this.signUpInputList = signUpInputList
        this.link_wrapper = this.createElement('p', 'authorization__link-wrapper')
        this.link_wrapper.textContent = 'Already have an account? '
        this.link = this.createElement('a', 'authorization__link')
        this.link.textContent = 'Sign in'
        this.link.href = 'signin'
        this.link_wrapper.append(this.link)
        this.inputs = this.signUpInputList.map(input => this.createInput(input))
        this.inputs.forEach(input => this.form.append(input))
        this.form.prepend(this.title)
        this.form.append(this.submit)
        this.form.append(this.link_wrapper);
        this.page.append(this.form)
        this.validator = new FormValidator(validationSettings,this.form)
        this.validator.enableValidation()
    }

    renderSignIn () {
        this.clearContent()
        this.form = this.createElement('form', 'authorization')
        this.title = this.createElement('h1', 'authorization__title')
        this.title.classList.add('authorization__title_sign-in')
        this.title.textContent = 'Sign In'
        this.submit = this.createElement('button', 'authorization__submit')
        this.submit.textContent = 'Sign In'
        this.submit_icon = this.createElement('span', 'icon-submit')
        this.submit.append(this.submit_icon)
        this.signInInputList = signInInputList;
        this.link_wrapper = this.createElement('p', 'authorization__link-wrapper')
        this.link_wrapper.textContent = 'Dont have an account? '
        this.link = this.createElement('a', 'authorization__link')
        this.link.textContent = 'Sign up'
        this.link.href = '/'
        this.link_wrapper.append(this.link)
        this.forgot_pass = this.createElement('a', 'authorization__link')
        this.forgot_pass.textContent = 'Forgot Password?'
        this.forgot_pass.href = 'restore-pass'
        this.inputs = this.signInInputList.map(input => this.createInput(input))
        this.inputs.forEach(input => this.form.append(input))
        this.form.prepend(this.title)
        this.form.append(this.submit)
        this.form.append(this.forgot_pass)
        this.form.append(this.link_wrapper);
        this.page.append(this.form)
        this.validator = new FormValidator(validationSettings,this.form)
        this.validator.enableValidation()
    }

    renderRestorePass () {
        this.clearContent()
        this.form = this.createElement('form', 'authorization')
        this.title_wrapper = this.createElement('div', 'authorization__title-wrapper')
        this.title = this.createElement('h1', 'authorization__title')
        this.title.classList.add('authorization__title_restore-pass')
        this.title.textContent = 'Restore Password'
        this.title_img = this.createElement('a','authorization__title-img')
        this.title_img.href = 'signin'
        this.title_wrapper.append(this.title_img,this.title)
        this.text = this.createElement('p','authorization__text')
        this.text.textContent = 'Please use your email address, and we’ll send you the link to reset your password'
        this.submit = this.createElement('button', 'authorization__submit')
        this.submit.textContent = 'Send Reset Link'
        this.submit_icon = this.createElement('span', 'icon-submit')
        this.submit.append(this.submit_icon)
        this.restorePasswordInputList = restorePasswordInputList
        this.inputs = this.restorePasswordInputList.map(input => this.createInput(input))
        this.inputs.forEach(input => this.form.append(input))
        this.form.prepend(this.text)
        this.form.prepend(this.title_wrapper)
        this.form.append(this.submit)
        this.page.append(this.form)
        this.validator = new FormValidator(validationSettings,this.form)
        this.validator.enableValidation()
    }

    clearContent () {
        if (this.page.firstChild) {
            this.page.removeChild(this.page.firstChild)
        }
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    }

    getElement (selector) {
        return document.querySelector(selector)
    }

    createInput(element) {
        const {icon, placeholder, type, name} = element;
        const wrapper = this.createElement('div', 'input-wrapper')
        const inputIcon = this.createElement('span','input-img')
        inputIcon.classList.add(`${icon}`)
        const input = this.createElement('input', 'input')
        input.type = type
        input.placeholder = placeholder
        input.name = name
        input.id = name
        input.minLength = 2;
        input.required = true
        input.noValidate = true
        const error = this.createElement('span', 'input-error')
        error.classList.add(`${name}-error`)
        wrapper.append(inputIcon, input, error)
        if (type === 'password') {
            const button = this.createElement('span','icon-eye')
            wrapper.append(button)
        }
        return wrapper
    }

}

class Controller {
    constructor(model,view) {
        this.model = model
        this.view = view
    }

    render (url) {
        if (url === '/' || url === '/signup') {
            this.view.renderSignUp()
        } else if (url === '/signin') {
            this.view.renderSignIn()
        } else if (url === '/restore-pass') {
            this.view.renderRestorePass()
        }

        document.querySelectorAll('a').forEach(el => {
            el.addEventListener('click', evt => {
                evt.preventDefault()
                const {pathname: path} = new URL(evt.target.href)
                console.log(window.location.origin + path)
                window.history.pushState({path}, null, window.location.origin + path)
                this.render(path);
            })
        })
    }

    enableRouting () {
        this.render('/')
        window.addEventListener('popstate', () => {
            this.render(new URL(window.location.href).pathname)
        })
    }

}

const app = new Controller(new Model(), new View())

app.enableRouting()





