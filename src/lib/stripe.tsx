import Stripe from 'stripe'
import { stripeTest } from '../pages/home/index'

export const stripe = new Stripe(stripeTest.STRIPE_SECRET_KEY, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Afro Hair',
  },
})
