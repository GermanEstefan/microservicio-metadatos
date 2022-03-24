const fileAnalyse = (req, res) => {
    const { originalname, size, mimetype } = req.file;
    console.log(req.file)
    res.json({
        name: originalname,
        type: mimetype,
        size
    })
}

module.exports = {
    fileAnalyse
}