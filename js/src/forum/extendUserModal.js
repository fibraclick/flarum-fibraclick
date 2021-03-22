import {extend} from 'flarum/common/extend';
import EditUserModal from 'flarum/forum/components/EditUserModal';
import Stream from 'flarum/common/utils/Stream';

export default function () {
    extend(EditUserModal.prototype, 'oninit', function () {
        this.flairName = Stream(this.attrs.user.flairName() || '');
        this.flairColor = Stream(this.attrs.user.flairColor() || '');
    });

    extend(EditUserModal.prototype, 'fields', function (fields) {
        fields.add(
            'flair-name',
            <div className="Form-group">
                <label>Flair</label>
                <input
                    className="FormControl"
                    placeholder='Nome flair/azienda'
                    bidi={this.flairName}
                />
            </div>,
            9
        );

        fields.add(
            'flair-color',
            <div className="Form-group">
                <label>Colore flair</label>
                <input
                    className="FormControl"
                    placeholder='#ffffff'
                    bidi={this.flairColor}
                />
            </div>,
            9
        );
    });

    extend(EditUserModal.prototype, 'data', function (data) {
        data.flairName = this.flairName();
        data.flairColor = this.flairColor();
    });
}
