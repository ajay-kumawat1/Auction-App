import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minLength: [4, 'Username must be at least 4 characters'],
        maxLength: [20, 'Username must be at most 20 characters'],
        required: [true, 'Please enter your username'],
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please enter your email'],
    },
    password: {
        type: String,
        minLength: [8, 'Password must be at least 8 characters'],
        maxLength: [20, 'Password must be at most 20 characters'],
        required: [true, 'Please enter your password'],
    },
    address: {
        type: String,
        required: [true, 'Please enter your address'],
    },
    phone: {
        type: String,
        minLength: [10, 'Phone number must be exact 10 digit'],
        maxLength: [10, 'Phone number must be exact 10 digit'],
        required: [true, 'Please enter your phone number without country code'],
    },
    profileImage: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    paymentMethods: {
        bankTransfer: {
            bankAccountNumber: String,
            bankAccountName: String,
            bankName: String,
        },
        easypaisa: {
            easypaisaNumber: String,
        },
        paypal: {
            paypalEmail: String,
        },
    },
    role: {
        type: String,
        enum: ['Auctioneer', 'Bidder', 'Super Admin'],
    },
    unpaidCommission: {
        type: Number,
        default: 0,
    },
    auctionWon: {
        type: Number,
        default: 0,
    },
    moneySpend: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true },
);

export const User = mongoose.model('User', userSchema);