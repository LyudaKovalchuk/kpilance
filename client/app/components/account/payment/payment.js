'use strict';

angular.module('kpilance')
    .component('payment', {
        templateUrl: 'app/components/account/payment/payment.html',
        controller: paymentCtrl,
        controllerAs: 'ctrl'
    });

function paymentCtrl(UserService) {
    let ctrl = this;

    ctrl.createPaymentAccount = () => {
        //TODO
    };
}