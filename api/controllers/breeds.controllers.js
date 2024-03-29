export const getBreeds = (req, res) => {
    res.send('getBreeds');
};

export const getBreed = (req, res) => {
    const id = req.params.id;
    res.send(`getBreed ${id}`);
};

export const createBreed = (req, res) => {
    res.send('createBreed');
};

export const updateBreed = (req, res) => {
    const id = req.params.id;
    res.send(`updateBreed ${id}`);
};

export const deleteBreed = (req, res) => {
    const id = req.params.id;
    res.send(`deleteBreed ${id}`);
};