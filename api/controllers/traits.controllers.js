export const getTraits = (req, res) => {
    res.send('getTraits');
};

export const getTrait = (req, res) => {
    const id = req.params.id;
    res.send(`getTrait ${id}`);
};