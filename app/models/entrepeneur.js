import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  firmName: validator('presence', true),
  email: [ 
    validator('presence', true),
    validator('format', {type: 'email'})
   ],
  cvr: [
    validator('presence', true),
    validator('length', { is: 8 }),
    validator('number', {
      allowString: true,
      integer: true
  })
  ],
  address: validator('presence', true),
  priority: [
     validator('presence', true),
     validator('number', {
      allowString: true,
      integer: true
  })
  ],
  comment: validator('format', {
    allowBlank: true
  })

});

export default DS.Model.extend( 
  Validations, {
  firmName: DS.attr('string'),
  email: DS.attr('string'),
  cvr: DS.attr('number'),
  address: DS.attr('string'),
  comment: DS.attr('string'),
  priority: DS.attr('number')
});
