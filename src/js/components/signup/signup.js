import { AuthService } from './../../services/auth.service';
import { ModalsComponent } from './../modals/modal';

export class SignUpComponent {
    constructor() {
        this._authService = new AuthService();
        this._modal = new ModalsComponent();
    }

    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Signup in Social.</h3>
                <p class="text-secondary">Enter your data to signup.</p>
                <form name="signupForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="first_name" placeholder="first_name" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="last_name" placeholder="last_name" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="gender_orientation" placeholder="male_or_female"  required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="city" placeholder="city" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="country" placeholder="country" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="date_of_birth_day" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="date_of_birth_month" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="date_of_birth_year" required data-pattern="\S+">


                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Signup</button>
                        </div>
                        <div>
                        <a href="/#/">Go to Home page</a>
                        </div>
                        <div>
                        <a href="/#/Login">Go to Login</a>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">

            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
    }

    afterRender() {
        document.forms.signupForm.addEventListener('submit', e => {
            e.preventDefault();

            let data = {};             

            for (let i = 0; i < (e.target.elements.length -1) ; i++ ) {
                data[e.target.elements[i].id] = e.target.elements[i].value;
                // console.log(e.target.elements[i].value)
                if (!e.target.elements[i].value) {
                   return console.warn('Заполните все поля');
                }
            }
            // console.log(data);

            this._authService.signUp(data)
            .then(response => console.log(response))
            .catch(err => this._modal.render(err.message));
        });
    }
}