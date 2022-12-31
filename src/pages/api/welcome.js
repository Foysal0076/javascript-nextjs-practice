const welcome = async (req, res) => {
  if (req.method === 'GET') {
    const { test } = req.body
    res.send({ message: `This is body ${test}` })
  }
}

export default welcome
