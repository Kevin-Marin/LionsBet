import User from "../../database/models/user_model.js";

const store = async (req, res) => {
    try {
        await User.create(req.body);
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
};

const index = async (req, res) => {
    try {
        const content = await User.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await User.findById(req.params.id).exec();
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id).exec()
        res.json();
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}