import Ember from 'ember';

const {
    computed,
    defineProperty
} = Ember;

export default Ember.Component.extend({
    classNames: ['validated-input'],
    classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
    model: null,
    value: null,
    type: '',
    valuePath: '',
    placeholder: '',
    validation: null,
    isTyping: false,
    showValidations: false,

    notValidating: computed.not('validation.isValidating').readOnly(),
    didValidate: computed.oneWay('targetObject.didValidate'),
    hasContent: computed.notEmpty('value').readOnly(),
    hasWarnings: computed.notEmpty('validation.warnings').readOnly(),
    isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
    isInvalid: computed.oneWay('validation.isInvalid'),
    shouldDisplayValidations: computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

    showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),
    showErrorMessage: computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),
    showWarningMessage: computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),
    showMessage: computed('validation.isDirty', 'isInvalid', 'didValidate', function() {
        return (this.get('validation.isDirty') || this.get('didValidate')) && this.get('isInvalid');
    }),

    init() {
        this._super(...arguments);
        let valuePath = this.get('valuePath');

        defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${valuePath}`));
        defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
    },

    focusOut() {
        this._super(...arguments);
        this.set('showValidations', true);
    }
});