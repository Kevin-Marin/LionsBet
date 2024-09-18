import conn from "../conn.js";

const Schema = conn.Schema;

const rechargeSchema = new Schema({
    value: {
        type: Schema.Types.Number,
        min: 10,
    },
    status: {
        type: Schema.Types.String,
        enum: ["FINALIZADA", "PENDENTE", "RECUSADA", "CANCELADA"],
        default: "PENDENTE",
    },
});

const walletSchema = new Schema({
    balance: {
        type: Schema.Types.Number,
        default: 0,
        min: 0,
    },
    password: {
        type: Schema.Types.String,
        minLength: 4,
        maxLenght: 4,
    },
    recharges: [rechargeSchema],
});

const userSchema = new Schema({
    email: {
        type: Schema.Types.String,
        validate: {
            validator: function (v) {
                return /^\d+$/.test(v);
            },
        },
        required: true,
    },
    nickname: {
        type: Schema.Types.String,
        required: true,
        validate: {
            validator(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                    v
                ); 
            },
        },
    },
    wallet: walletSchema,
    acceptedTerms: {
        type: Schema.Types.Boolean,
        required: true,
    },
});

const User = conn.model("User", userSchema);

export default User;