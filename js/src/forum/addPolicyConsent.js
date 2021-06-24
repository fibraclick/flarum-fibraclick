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
                            <Link target="_blank" href="https://fibra.click/privacy.pdf">Informativa sulla privacy</Link>,
                            ' e i ',
                            <Link target="_blank" href="https://fibra.click/termini.pdf">Termini e condizioni</Link>
                        ]
                    }
                </label>
            </div>
        );
    });
}
