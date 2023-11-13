import React, { useRef, useEffect, useState } from 'react';

export function Paypal() {
    const paypalRef = useRef();
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        // Load PayPal script
        if (window.paypal) {
            setSdkReady(true);
        } else {
            const script = document.createElement('script');
            script.src = "https://www.paypal.com/sdk/js?client-id=AW2Yph_P1KOeqRfuVlHufD9KYw4E5Dhvh1PX7UJy69JFVIXiXLqLF6BHvQcPRcB5tbLjlr21bwhvPAe9&currency=EUR";
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        if (sdkReady) {
            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    console.log("Creating order...");
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                            amount: {
                                currency_code: "EUR",
                                value: "54.00"  // Set this value dynamically based on the order
                            }
                        }]
                    });
                },
                onApprove: async (data, actions) => {
                    console.log("Order approved: ", data);
                    const order = await actions.order.capture();
                    console.log("Order captured: ", order);
                },
                onError: (err) => {
                    console.error("Error during payment: ", err);
                }
            }).render(paypalRef.current);
        }
    }, [sdkReady]);

    return (
        <div>
            <div ref={paypalRef}></div>
        </div>
    );
}
