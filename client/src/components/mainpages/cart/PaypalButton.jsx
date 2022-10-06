import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class PaypalButton extends React.Component {
    render() {
        const onSuccess = (payment) => {
            console.log("The payment was succeeded!", payment);
            this.props.tranSuccess(payment)
        }

        const onCancel = (data) => {
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log("Error!", err);
        }

        let env = 'sandbox';
        let currency = 'THB';
        let total = this.props.total;


        const client = {
            sandbox: "AXMUBOcaszqCzfEOC-r--Rn7rMVoEbH9c6XbmyKb04nURqcLhpFxWwwnaUytaMR9UTaE2vwLfi5tqKbT",
            production: "aa",
        }

        let style = {
            size: 'small',
            color: 'blue',
            label: 'checkout',
            tagline: false
        }

        return (
            <PaypalExpressBtn
                env={env} client={client}
                currency={currency}
                total={total} onError={onError}
                onSuccess={onSuccess} onCancel={onCancel}
                style={style} />
        );
    }
}