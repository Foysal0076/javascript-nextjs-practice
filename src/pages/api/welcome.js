
const welcome = (req, res) => {
    res.status(200).json({ name: 'Welcome to Javascript Practice' })
}

export default welcome