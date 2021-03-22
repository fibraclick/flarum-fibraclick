import {extend} from 'flarum/common/extend';
import app from 'flarum/app';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import Link from 'flarum/common/components/Link';

export default function () {
    extend(SignUpModal.prototype, 'fields', function (fields) {
        fields.add(
            'fibraclick-terms',
            <div class="Form-group">
                <label class="checkbox">
                    <input type="checkbox" required={true} disabled={this.loading}/>
                    {
                        [
                            'Accetto l\'',
                            <Link target="_blank" href={app.route('page', {id: 1})}>Informativa sulla privacy</Link>,
                            ' e i ',
                            <Link target="_blank" href={app.route('page', {id: 2})}>Termini d'uso</Link>
                        ]
                    }
                </label>
            </div>
        );
    });
}
