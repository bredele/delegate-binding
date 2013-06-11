var delegate = require('delegate');

/**
 * Expose 'Delegate Binding'
 */

module.exports = DelegateBinding;

/**
 * Initialize a Delegate Binding
 *
 * @param {DomElement} el DOM node
 * @param {String} event the event name
 */

function DelegateBinding(view, scope) {
  //test scope and view
  //if scope not defined view is default scope
  view.bind('delegate', function(el, name) {
    var params = name.split(','),
        capture = (params[3] === 'true');

    var fun = delegate.bind(el, params[1], params[0], function(e){
      var fn = scope[params[2]];
      if (!fn) {
        delegate.unbind(el, params[0], fun, capture);
        throw new Error('method .' + method + '() missing');
      }
      fn.call(scope, el);
    }, capture);
  });

}

/**DelegateBinding.prototype.unbind = function(el, event, handler, capture) {
  delegate.unbind(el, event, handler, capture);
};**/