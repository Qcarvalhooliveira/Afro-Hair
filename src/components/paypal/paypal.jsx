import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/productContext';

export function Paypal({ userInfo }) {
    const paypalRef = useRef();
    const navigate = useNavigate();
    const { cart } = useProducts();
    const [sdkReady, setSdkReady] = useState(false);

    useEffect(() => {
        
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
        
            while (paypalRef.current && paypalRef.current.firstChild) {
                paypalRef.current.removeChild(paypalRef.current.firstChild);
            }

            window.paypal.Buttons({
                createOrder: (data, actions, err) => {
                    console.log("Creating order...");
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: cart.map((item, index) => ({
                            reference_id: `item_${item.id}`, 
                            description: item.name,
                            amount: {
                                currency_code: "EUR",
                                value: (item.price * item.quantity).toFixed(2)
                            }
                        }))
                    });
                },
                onApprove: async (data, actions) => {
                    console.log("Order approved: ", data);
                    const order = await actions.order.capture();
                    console.log("Order captured: ", order);
                    const totalPaid = order.purchase_units.reduce((acc, unit) => acc + parseFloat(unit.amount.value), 0).toFixed(2);
                    navigate('/success', { state: { userInfo, totalPaid } });
                },
                onError: (err) => {
                    console.error("Error during payment: ", err);
                }
            }).render(paypalRef.current);
        }
    }, [sdkReady, cart, userInfo]); 

    return (
        <div>
            <div ref={paypalRef}></div>
        </div>
    );
}
